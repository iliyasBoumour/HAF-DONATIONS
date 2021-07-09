import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Col, Input, Label, Row, Spinner } from "reactstrap";
import CartSummary from "../CartItem/CartSummary";
import axios from "axios";
import "./paymentSteps.css";
import { PayPalButton } from "react-paypal-button-v2";
import { pay } from "../../actions/paymentActions";
import Toast from "../../components/Toast";
import { useHistory } from "react-router-dom";
import { cleanCart } from "../../actions/cartActions";
import { PAYMENT_RESET } from "../../actions/types";

const Pay = () => {
  const history = useHistory();
  const { cart, paymentMethod } = useSelector((state) => state.cartReducers);
  const { currentUser } = useSelector((state) => state.authReducer);
  const {
    loading,
    payment,
    error: paymentErr,
  } = useSelector((state) => state.paymentReducers);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [anonymous, setAnonymous] = useState(false);
  const [paypalSdk, setPaypalSdk] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const paymentSuc = (paymentRes, data) => {
    dispatch(pay(paymentRes));
  };
  useEffect(() => {
    const getUser = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `HAFDON ${currentUser.token}`,
        },
      };
      try {
        const { data } = await axios(`/api/user`, config);
        setUser(data);
        const paypalScript = document.createElement("script");
        paypalScript.type = "text/javascript";
        paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_API_KEY}`;
        paypalScript.async = true;
        paypalScript.onload = () => setPaypalSdk(true);
        document.body.appendChild(paypalScript);
      } catch (error) {
        setError(error?.response?.data?.msg);
      }
    };
    getUser();
  }, [currentUser]);

  useEffect(() => {
    if (payment) {
      history.push({
        pathname: "/cart",
        state: { msg: "payment success ! thank you for your trust !" },
      });
      dispatch(cleanCart());
      dispatch({ type: PAYMENT_RESET });
    } else if (paymentErr) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [payment, paymentErr, dispatch, history]);
  return (
    <Row className="pay-container">
      {error ? (
        <Alert className="px-5" color="danger">
          {error || "error"}
        </Alert>
      ) : (
        user !== null && (
          <>
            <Col xs="12" lg="8" className="order-content">
              <h2 className="fw-bold mt-4 mb-5 text-gradient">Order Info</h2>
              <div className="order-info">
                <h3>DONOR</h3>
                <div className="px-3">
                  <h6>{`NAME : ${user?.username}`}</h6>
                  <h6>{`EMAIL : ${user?.email}`}</h6>
                  <h6>{`PHONE : ${user?.phone}`}</h6>
                  <h6>{`COUNTRY : ${user?.country}`}</h6>
                  <Label check>
                    <Input
                      type="checkbox"
                      checked={anonymous}
                      onChange={() => setAnonymous(!anonymous)}
                    />
                    Donate As Anonymous
                  </Label>
                </div>
                <hr className="my-4" />
                <h3>PAYMENT METHOD</h3>
                <div className="px-3">
                  <h6>{`METHOD : ${paymentMethod}`}</h6>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="4" className="order-summary">
              <CartSummary title="Cart Total" cart={cart}>
                <div className=" text-uppercase mt-auto fw-bold ">
                  {loading || !paypalSdk ? (
                    <div className="center-x">
                      <Spinner />
                    </div>
                  ) : (
                    <PayPalButton
                      amount={cart.reduce((acc, item) => acc + item.amount, 0)}
                      shippingPreference="NO_SHIPPING"
                      onSuccess={paymentSuc}
                      onError={(e) => console.log(e)}
                      onCancel={(data) => console.log(data)}
                    />
                  )}
                </div>
              </CartSummary>
            </Col>

            {showToast && <Toast msg="payment error" />}
          </>
        )
      )}
    </Row>
  );
};

export default Pay;
