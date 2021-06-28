import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const CartSummary = ({ title, cart, children }) => {
  const history = useHistory();
  return (
    <section className="cartTotal">
      <h2 className="fw-bold mb-5 text-gradient">{title}</h2>
      <div className="one-info">
        <h6>projects:</h6>
        <h6>{cart.length}</h6>
      </div>
      <hr className="my-4" />
      {/* <div className="one-info">
        <h6>projects:</h6>
        <h6>3</h6>
        <h6 className="remove">X</h6>
      </div>
      <hr className="my-4" /> */}
      <div className="one-info">
        <h5 className="fw-bold" style={{ marginRight: "63px" }}>
          Total:
        </h5>
        <h5 className="fw-bold">
          {cart.reduce((acc, item) => acc + item.amount, 0)} $
        </h5>
      </div>

      {children || (
        <Button
          onClick={() => history.push("/payment")}
          outline
          className=" text-uppercase mt-auto fw-bold "
        >
          pay now
        </Button>
      )}
    </section>
  );
};

export default CartSummary;
