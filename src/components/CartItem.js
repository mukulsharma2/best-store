import React from "react";
import {formatPrice} from "../helper/constants";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const CartItem = ({ productData }) => {

  const { id, name, image, color, price, amount, selectedColor } = productData

  // const { removeItem, setDecrease, setIncrement } = redux
const dispatch = useDispatch()

  // const setDecrease = () => {
  //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  // };

  // const setIncrease = () => {
  //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  // };

  if(!productData) return null

  return (
    <div className="flex flex-col gap-4">
      <div className="">
          <figure>
            <img src={image} alt={id} />
          </figure>
        <div>
          <span>{name}</span>
          <div className="">
            <span>color:</span>
            <div
              className=""
              style={{ backgroundColor: color }}></div>
          </div>
        </div>
      </div>

      {/* price   */}
      <div className="">
          {formatPrice(price)}
      </div>

      {/* Quantity  */}
      <div className="">
          {/* <button onClick={() => setDecrease()}> */}
            <FaMinus />
          {/* </button> */}
          <span className="">{amount}</span>
          {/* <button onClick={() => setIncrease()}> */}
            <FaPlus />
          {/* </button> */}
      </div>

      {/* Subtotal */}
      <div className="">
          {formatPrice(price * amount)}
      </div>

      <div>
        <FaTrash className="" onClick={() => dispatch(removeItem(id + selectedColor))} />
      </div>
    </div>
  );
};

export default CartItem;
