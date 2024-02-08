import React, { useState } from 'react'
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const AddToCart = ({product}) => {
    const {id, colors,stock} = product
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);

    const setDecrease = () => {
      quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    };
  
    const setIncrease = () => {
      quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
    };

    return (
        <div className="">
          <div className='flex gap-1'>
            Color:
            {colors.map((curColor, index) => {
              return (
                <button
                  key={index}
                  style={{backgroundColor: curColor}}
                  className={'hover:opacity-100 w-6 h-6 rounded-full border border-black' + (selectedColor !== curColor ? " opacity-50" : "")}
                  onClick={() => setSelectedColor(curColor)}>
                  {selectedColor === curColor ? <FaCheck className="m-auto" /> : null}
                </button>
              );
            })}
          </div>
  
        <div className="flex gap-4">
          <button onClick={() => setDecrease()}>
            <FaMinus />
          </button>
          <div className="">{quantity}</div>
          <button onClick={() => setIncrease()}>
            <FaPlus />
          </button>
      </div>
  
        <Link to="/cart" onClick={() => dispatch(addToCart({
          ...product, selectedColor, quantity, uniqueId: (id + selectedColor),
        }))}>
          <button className="bg-[#6254F3] px-5 py-2 font-semibold text-xl text-white">Add To Cart</button>
        </Link>
        </div>
    );
}

export default AddToCart
