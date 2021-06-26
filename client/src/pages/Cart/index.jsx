import React, { useEffect } from "react";
import Center from "../../components/Center";
import Item from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Button } from "reactstrap";
import "./cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducers);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <div className="cart-screen">
      {cart.length === 0 ? (
        <Center>
          <Alert variant="info">
            Your cart is empty, <Link to="/projects">fill it now</Link> !
          </Alert>
        </Center>
      ) : (
        <div className="cart-items-container">
          <div className="caption">
            <h1 className="text-gradient">Your Cart</h1>
          </div>
          <div className="cart-wrapper">
            <div className="cart-items">
              {cart.map((item) => (
                <Item key={item._id} {...item} />
              ))}
            </div>
            <div className="total">
              <p>
                Projects : <strong>{cart.length}</strong>
              </p>
              <p className="sum">
                Total :{" "}
                <strong>
                  {cart.reduce((acc, item) => acc + item.amount, 0)}
                </strong>{" "}
                Dh
              </p>
              <Button outline>Pay Now</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
