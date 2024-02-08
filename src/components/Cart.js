import React, { useMemo } from 'react'
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import {formatPrice} from "../helper/constants";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cart.cartItems)
  const shippingFee = 50000

  let totalPrice =  useMemo(() => {
    return cartItems.reduce((acc, curr)=>{
      let {quantity, price} = curr
      acc += quantity * price
      return acc
    }, 0)
  }, [cartItems])

  if (cartItems?.length === 0) return <h3 className='mt-20'>Cart is empty!</h3>

  return (
      <div className="mt-20">
        <div className="grid grid-cols-5">
          <p>Item</p>
          <p className="">Price</p>
          <p>Quantity</p>
          <p className="">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          {cartItems && cartItems.map((curElem) => {
            return <CartItem key={curElem.id} productData={curElem} />;
          })}
        </div>
        <hr />
        <div className="flex justify-between">
          <Link to="/products">
            <button className='bg-[#6254F3] px-5 py-2 font-semibold text-xl text-white border border-black transition-all'> continue Shopping </button>
          </Link>
          <button className="bg-[#ec3535] px-5 py-2 font-semibold text-xl text-white border border-black transition-all" onClick={()=> dispatch(clearCart())}>
            clear cart
          </button>
        </div>

        {/* order total_amount */}
        <div className="">
          <div className="">
            <div className="flex justify-between">
              <p>subtotal:</p>
              <p>
                {formatPrice(totalPrice)}
              </p>
            </div>
            <div className="flex justify-between">
              <p>shipping fee:</p>
              <p>
                {formatPrice(shippingFee)}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>order total:</p>
              <p>
                {formatPrice(shippingFee + totalPrice)}
              </p>
            </div>
          </div>
        </div>
      </div>
);
}

export default Cart
