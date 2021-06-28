import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "reactstrap";
import "./paymentSteps.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import Toast from "../../components/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const { errors } = useSelector((state) => state.errorReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errors && errors.msg) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [errors]);

  useEffect(() => {
    console.log("false ");
    setShowToast(false);
  }, []);

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
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="PASSWORD"
          required
        />
        <Button outline type="submit">
          Sign In
        </Button>
      </Form>
      {showToast && <Toast msg={errors.msg} />}
    </div>
  );
};

export default Login;
