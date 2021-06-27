import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Center from "../../components/Center";
import Item from "../../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Button, Row, Col, Container } from "reactstrap";
import "./cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducers);
  const history = useHistory();
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      {cart.length === 0 ? (
        <Center>
          <Alert variant="info">
            Your cart is empty, <Link to="/projects">fill it now</Link> !
          </Alert>
        </Center>
      ) : (
        <Container className="cart-items-container">
          <Row>
            <Col xs="12" lg="8" className="cart-content">
              <h2 className="fw-bold mt-4 mb-5">Shopping Cart</h2>
              <table class="table table-borderless">
                <thead>
                  <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                    <th class="bg-transparent text-dark px-0">Product</th>
                    <th class="bg-transparent text-dark px-0">Quantity</th>
                    <th class="bg-transparent text-dark px-0">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="mt-2">
                    <td class="px-0 pt-4">
                      <div class="d-flex align-items-center">
                        <img
                          src="https://flatlogic-ecommerce-backend.herokuapp.com/images/products/5.png"
                          width="100"
                          class="mr-4"
                        />
                        <div>
                          <h6 class="text-muted">Furniture12</h6>
                          <h5 class="fw-bold">Fancy Chair</h5>
                        </div>
                      </div>
                    </td>
                    <td class="px-0 pt-4">
                      <div class="d-flex align-items-center">
                        <button
                          type="button"
                          class="Cart_quantityBtn__2dpnu bg-transparent border-0 p-1 fw-bold mr-3 btn btn-secondary"
                        >
                          -
                        </button>
                        <p class="fw-bold mb-0">1</p>
                        <button
                          type="button"
                          class="Cart_quantityBtn__2dpnu bg-transparent border-0 p-1 fw-bold ml-3 btn btn-secondary"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td class="px-0 pt-4">
                      <h6 class="fw-bold mb-0">70$</h6>
                    </td>
                    <td class="px-0 pt-4">
                      <button
                        type="button"
                        class="bg-transparent border-0 p-0 btn btn-secondary"
                      >
                        <img src="" alt="close" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col xs="12" lg="4" className="cart-summary">
              {/* <section className="cartTotal">
              <h2 className="fw-bold mb-5 text-gradient">Cart Total</h2>
              <div className="one-info">
                <h6 className="">projects:</h6>
                <h6 className="">3</h6>
              </div>
              <hr className="my-4" />
              <div className="one-info">
                <h6 className="">projects:</h6>
                <h6 className="">3</h6>
                <h6 className="remove">X</h6>
              </div>
              <hr className="my-4" />
              <div className="one-info">
                <h5 className="fw-bold" style={{ marginRight: "63px" }}>
                  Total:
                </h5>
                <h5 className="fw-bold">135$</h5>
              </div>
              <Button outline className=" text-uppercase mt-auto fw-bold ">
                Check out
              </Button>
            </section> */}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Cart;
