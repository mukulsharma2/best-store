import React from "react";
import {formatPrice} from "../helper/constants";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const CartItem = ({ productData }) => {

  const { id, name, image, price, quantity, selectedColor } = productData

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
    <div className="grid grid-cols-5 items-center">
      <div className="">
          <figure>
            <img src={image[0]?.url} alt={id} className="w-32 h-20" />
          </figure>
        <div>
          <span>{name}</span>
          <div className="flex">
            <span>color:</span>
            <div
              className="w-6 h-6 rounded-full border border-black"
              style={{ backgroundColor: selectedColor }}></div>
          </div>
        </div>
      </div>

      {/* price   */}
      <div className="">
          {formatPrice(price)}
      </div>

      {/* Quantity  */}
      <div className="flex gap-4">
          {/* <button onClick={() => setDecrease()}> */}
            <FaMinus />
          {/* </button> */}
          <span className="">{quantity}</span>
          {/* <button onClick={() => setIncrease()}> */}
            <FaPlus />
          {/* </button> */}
      </div>

      {/* Subtotal */}
      <div className="">
          {formatPrice(price * quantity)}
      </div>

      <div>
        <FaTrash className="" onClick={() => dispatch(removeItem(id + selectedColor))} />
      </div>
    </div>
  );
};

export default CartItem;
