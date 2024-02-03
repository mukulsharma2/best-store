import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
// import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";

const AddToCart = ({product}) => {
    const {id, colors,stock} = product

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
  
    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
  
    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
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
                  className={'hover:opacity-100 w-6 h-6 rounded-full border border-black' + (color !== curColor ? " opacity-50" : "")}
                  onClick={() => setColor(curColor)}>
                  {color === curColor ? <FaCheck className="m-auto" /> : null}
                </button>
              );
            })}
          </div>
  
        {/* add to cart  */}
        {/* <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
  
        <Link to="/cart" onClick={() => addToCart(id, color, amount, product)}>
          <button className="">Add To Cart</button>
        </Link> */}
        </div>
    );
}

export default AddToCart
