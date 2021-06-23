import React from "react";
import { Col, Button } from "reactstrap";

const SignInOrUp = ({ title, body, action, onClick }) => {
  return (
    <Col className="login-col " xs={12} md={6}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Button name={action} onClick={onClick} outline>
        {action}
      </Button>
    </Col>
  );
};

export default SignInOrUp;
