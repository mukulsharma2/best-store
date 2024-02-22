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

  if (cartItems?.length === 0) return <h3 className='mt-20 min-h-[50vh]'>Cart is empty!</h3>

  return (
      <div className="mt-20 min-h-[50vh]">
        <div className="ml-1 sm:ml-3 grid grid-cols-4 sm:grid-cols-5">
          <p className='font-bold text-lg sm:text-xl'>Item</p>
          <p className='font-bold text-lg sm:text-xl hidden sm:block'>Price</p>
          <p className='font-bold text-lg sm:text-xl'>Quantity</p>
          <p className='font-bold text-lg sm:text-xl'>Subtotal</p>
          <p className='font-bold text-lg sm:text-xl'>Remove</p>
        </div>
        <hr className='my-5' />
        <div className="ml-1 sm:ml-3 flex flex-col gap-4">
          {cartItems && cartItems.map((curElem) => {
            return <CartItem key={curElem.id} productData={curElem} />;
          })}
        </div>
        <hr className='my-14' />
        <div className="flex justify-between">
          <Link to="/products">
            <button className='bg-[#6254F3] px-3 sm:px-5 py-1 sm:py-2 font-semibold sm:text-xl text-white border border-black transition-all hover:shadow-xl'> Continue Shopping </button>
          </Link>
          <button className="bg-[#ec3535] px-3 sm:px-5 py-1 sm:py-2 font-semibold sm:text-xl text-white border border-black transition-all hover:shadow-xl" onClick={()=> dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>

        {/* order total_amount */}
        <div className="mt-10 w-3/4 sm:w-2/5 mx-auto sm:ml-auto sm:mr-5">
            <div className="flex justify-between">
              <p className='font-semibold'>Subtotal:</p>
              <p>
                {formatPrice(totalPrice)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className='font-semibold mb-3'>Shipping Fee:</p>
              <p>
                {formatPrice(shippingFee)}
              </p>
            </div>
            <hr />
            <div className="flex justify-between mt-3">
              <p className='font-semibold'>Order Total:</p>
              <p>
                {formatPrice(shippingFee + totalPrice)}
              </p>
            </div>
        </div>
      </div>
);
}

export default Cart
