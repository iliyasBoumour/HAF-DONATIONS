import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "reactstrap";
import SignInOrUp from "./SignInOrUp";
import "./login.css";
import { useHistory } from "react-router-dom";
import { register, login } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../components/Toast";
const Login = () => {
  const { currentUser, error, isloading } = useSelector(
    (state) => state.authReducer
  );
  const [isLogin, setisLogin] = useState(true);
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const refForms = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [error, isloading]);

  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);
  useEffect(() => {
    setShowToast(false);
  }, [user]);

  const showForm = () => {
    setisLogin(!isLogin);
    const toRemove = isLogin
      ? ["bounceRight", "bounceLeft"]
      : ["bounceLeft", "bounceRight"];
    refForms.current.classList.remove(toRemove[0]);
    refForms.current.classList.add(toRemove[1]);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitform = (e) => {
    e.preventDefault();
    isLogin ? signIn() : signUp();
    setUser({ username: "", email: "", password: "", confPassword: "" });
  };
  //sign up
  const signUp = () => {
    dispatch(register(user));
  };

  //sign in
  const signIn = () => {
    const { email, password } = user;
    const userAuth = {
      email,
      password,
    };
    dispatch(login(userAuth));
  };

  return (
    <div
      style={{ background: "#fff", minHeight: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      {showToast && <Toast msg={error} />}
      <Container style={{ position: "relative" }} fluid="lg">
        <Row>
          <SignInOrUp
            title="Don't have an account ?"
            body="Create a new account and join the app's family !"
            action="Sign up"
            onClick={showForm}
          />
          <SignInOrUp
            title="Have an account ?"
            body="login now and get in touch with your friends !"
            action="Login"
            onClick={showForm}
          />
        </Row>
        <Row ref={refForms} className="bounceRight form-login">
          {/* login */}
          <Col>
            <h2 className="text-center">{isLogin ? "Login" : "Sign Up"}</h2>
            <Form
              onSubmit={submitform}
              className="d-flex flex-column justify-content-center w-75 mx-auto my-4"
            >
              {isLogin || (
                <Form.Control
                  className="mt-0 mb-3"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  required
                />
              )}
              <Form.Control
                className="mt-0 mb-3"
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <Form.Control
                className="mb-4"
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              {isLogin || (
                <Form.Control
                  className="mb-4"
                  type="password"
                  placeholder="Confirm Password"
                  name="confPassword"
                  value={user.confPassword}
                  onChange={handleChange}
                  required
                />
              )}
              <Button
                className="ms-auto"
                type="submit"
                outline
                disabled={isloading}
              >
                {isLogin ? "LOG IN" : "SIGN UP"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
