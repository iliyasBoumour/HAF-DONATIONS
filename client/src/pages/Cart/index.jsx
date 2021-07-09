import React, { useEffect } from "react";
import Center from "../../components/Center";
import Item from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Row, Col, Container } from "reactstrap";
import "./cart.css";
import CartSummary from "../../components/CartItem/CartSummary";

const Cart = ({ location }) => {
  const { cart } = useSelector((state) => state.cartReducers);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      {cart.length === 0 ? (
        <Center>
          <Alert variant={location.state ? "success" : "info"}>
            {location.state ? location.state.msg : `Your cart is empty, `}
            {location.state ? "" : <Link to="/projects">fill it now !</Link>}
          </Alert>
        </Center>
      ) : (
        <Container className="cart-items-container">
          <Row>
            <Col xs="12" lg="8">
              <h2 className="fw-bold mt-4 mb-5 text-gradient">Shopping Cart</h2>
              <div className="cart-wrapper">
                <div className="cart-header">
                  <h4 className="pr-img-name">Project</h4>
                  <h4 className="pr-am">Amount</h4>
                  <h4> </h4>
                </div>
                <div>
                  {cart.map((item) => (
                    <Item key={item._id} {...item} />
                  ))}
                </div>
              </div>
            </Col>
            <Col xs="12" lg="4" className="cart-summary">
              <CartSummary title="Cart Summary" cart={cart} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Cart;
