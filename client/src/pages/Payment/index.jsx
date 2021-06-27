import React from "react";
import { Container } from "react-bootstrap";
import PaymentSteps from "../../components/PaymentSteps";
import Login from "../../components/PaymentSteps/Login";
import { useSelector } from "react-redux";
import Method from "../../components/PaymentSteps/Method";
import "./payment.css";
import Pay from "../../components/PaymentSteps/Pay";

const Payment = () => {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { paymentMethod } = useSelector((state) => state.cartReducers);
  const attributes = currentUser
    ? paymentMethod
      ? { step3: true }
      : { step2: true }
    : { step1: true };
  return (
    <Container id="payment" fluid="lg">
      <PaymentSteps {...attributes} />
      <div className="payment-content">
        {attributes.step1 && <Login />}
        {attributes.step2 && <Method />}
        {attributes.step3 && <Pay />}
      </div>
    </Container>
  );
};

export default Payment;
