import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import "./paymentSteps.css";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signIn = (e) => {
    e.preventDefault();
    const userAuth = {
      email,
      password,
    };
    dispatch(login(userAuth));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <Form onSubmit={signIn}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="EMAIL"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="PASSWORD"
        />
        <Button outline type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
