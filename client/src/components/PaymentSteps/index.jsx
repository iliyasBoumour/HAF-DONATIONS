import React from "react";
import "./paymentSteps.css";
const index = ({ step1, step2, step3 }) => {
  return (
    <div className="steps-names">
      <div className={`step-name  ${step1 ? "active" : ""}`}>
        <p>Sign In</p>
      </div>

      <div className={`step-name  ${step2 ? "active" : ""}`}>
        <p>Payment</p>
      </div>

      <div className={`step-name  ${step3 ? "active" : ""}`}>
        <p>Pay</p>
      </div>
    </div>
  );
};

export default index;
