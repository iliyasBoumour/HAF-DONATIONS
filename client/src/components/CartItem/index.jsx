import React from "react";
import "./cartItem.css";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItemfromCart, addItemToCart } from "../../actions/cartActions";

const CartItem = ({ _id, image, name, amount }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(removeItemfromCart(_id));
  };
  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-info">
        <h4>{name}</h4>
        <div className="cart-amount">
          <input
            type="number"
            value={amount}
            onChange={(e) => dispatch(addItemToCart(_id, e.target.value))}
          />
          <span className="text-gradient">DH</span>
        </div>
      </div>
      <MdDelete fontSize="1.7rem" onClick={removeItem} />
    </div>
  );
};

export default CartItem;
