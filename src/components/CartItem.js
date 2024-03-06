import React from "react";
import { formatPrice } from "../helper/constants";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, toggleQty } from "../store/cartSlice";

const CartItem = ({ productData }) => {
  const { id, name, image, price, quantity, selectedColor, uniqueId, stock } =
    productData;

  const dispatch = useDispatch();

  // early return if data is not available
  if (!productData) return null;

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 items-center">
      <div className="w-24 sm:w-auto">
        <figure>
          <img
            src={image[0]?.url}
            alt={id}
            className="w-24 sm:w-32 h-16 sm:h-20"
          />
        </figure>
        <div>
          <span className="font-medium">{name}</span>
          {/* colour */}
          <div className="mt-1 flex">
            <span>color:</span>
            <div
              className="ml-1 w-5 sm:w-6 h-5 sm:h-6 rounded-full border border-black"
              style={{ backgroundColor: selectedColor }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="hidden sm:block">{formatPrice(price)}</div>

      {/* Quantity */}
      <div className="ml-2 flex gap-2 sm:gap-4">
        <button
          onClick={() =>
            dispatch(toggleQty({ type: "decrease", stock, uniqueId }))
          }
        >
          <FaMinus />
        </button>
        <span>{quantity}</span>
        <button
          onClick={() =>
            dispatch(toggleQty({ type: "increase", stock, uniqueId }))
          }
        >
          <FaPlus />
        </button>
      </div>

      {/* Subtotal */}
      <div>{formatPrice(price * quantity)}</div>

      <div>
        <FaTrash
          className="cursor-pointer"
          onClick={() => dispatch(removeItem(uniqueId))}
        />
      </div>
    </div>
  );
};

export default CartItem;
