import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemfromCart } from "../../actions/cartActions";
import { Modal } from "react-bootstrap";
const Project = ({ _id, image, name, description, goal, rest, page }) => {
  const evolution = Math.trunc(100 - (rest / goal) * 100);
  const heightMarks = {
    [evolution]: `${evolution}%`,
  };
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // check if its in cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducers);
  const [inCart, setInCart] = useState(cart.some((pr) => pr._id === _id));
  const [disable, setDisable] = useState(false);
  // amount
  const [amount, setAmount] = useState();
  const [isError, setIsError] = useState(false);
  const addToCart = () => {
    if (amount > 0) {
      setDisable(true);
      dispatch(addItemToCart(_id, amount));
      setInCart(true);
      setDisable(false);
      handleClose();
    } else setIsError(true);
  };
  const handleModal = () => {
    if (inCart) {
      dispatch(removeItemfromCart(_id));
      setInCart(false);
    } else {
      setAmount(false);
      setIsError(false);
      setShow(true);
    }
  };
  return (
    <>
      <Card>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <div>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardText>
              {!page
                ? `${description?.substring(0, 150)} ${
                    description.length > 150 ? "..." : ""
                  } `
                : description}
            </CardText>
          </div>
          <div>
            <Slider marks={heightMarks} disabled={true} value={evolution} />
            <div className="goal">
              <p>
                Goal : <strong>{goal} $</strong>
              </p>
              <p id="raised">
                Rest : <strong>{rest} $</strong>
              </p>
            </div>
            <Button
              disabled={disable}
              className={inCart ? "remove" : ""}
              outline
              onClick={handleModal}
            >
              {inCart ? "Remove From Cart" : "Donate"}
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Set An Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-cont">
            <img src={image} alt={name} />
            <div className="don-info">
              <h3 className="text-gradient">{name}</h3>
              <div className="goals">
                <p>
                  Goal : <strong>${goal}M</strong>
                </p>
                <p id="raised">
                  Rest : <strong>{rest}</strong>
                </p>
              </div>
              {inCart || (
                <div className="amount">
                  <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => {
                      setIsError(false);
                      setAmount(e.target.value);
                    }}
                  />
                  <span>$</span>
                </div>
              )}
              <p
                style={isError ? { display: "block" } : { display: "none" }}
                className="error"
              >
                Set an amount &gt; 0
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button outline className="remove" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={disable}
            className={inCart ? "remove" : ""}
            onClick={addToCart}
            outline
          >
            {inCart ? "Remove From Cart" : "Add To Cart"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Project;
