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
      <div className="pr-img-name">
        <img width={100} src={image} alt={name} />
        <h4>{name}</h4>
      </div>
      <div className="cart-amount">
        <input
          type="number"
          value={amount}
          onChange={(e) => dispatch(addItemToCart(_id, e.target.value))}
        />
        <span className="text-gradient">$</span>
      </div>
      <div className="delete">
        <MdDelete fontSize="1.7rem" onClick={removeItem} />
      </div>
    </div>
  );
};

export default CartItem;
