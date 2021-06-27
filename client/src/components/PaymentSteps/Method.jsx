import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import "./paymentSteps.css";
import { setPaymentMethod } from "../../actions/cartActions";

const Method = () => {
  const [method, setMethod] = useState("");
  const dispatch = useDispatch();
  const setPaymentM = (e) => {
    e.preventDefault();
    if (method) dispatch(setPaymentMethod(method));
  };
  return (
    <div className="method-container">
      <h2>Payment Method</h2>
      <Form onSubmit={setPaymentM}>
        <p>select a payment method</p>
        <div>
          <Input
            id="paypal"
            type="radio"
            name="method"
            value="PayPal"
            onChange={(e) => setMethod(e.target.value)}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div>
          <Input
            type="radio"
            name="method"
            id="MasterCard"
            value="MasterCard"
            // disabled
            onChange={(e) => setMethod(e.target.value)}
          />
          <label htmlFor="MasterCard">Master Card</label>
        </div>
        <Button outline type="submit">
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Method;
