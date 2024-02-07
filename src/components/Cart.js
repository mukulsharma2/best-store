import React from 'react'
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import {formatPrice} from "../helper/constants";
// import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../store/cartSlice';

const Cart = () => {
  // const { cart, clearCart, total_price, shipping_fee } = redux
  const dispatch = useDispatch()

  // const { isAuthenticated, user } = useAuth0();

  const cartItems = useSelector(store => store.cart.cartItems)

  if (cartItems?.length === 0) return <h3 className='mt-20'>Cart is empty!</h3>

  return (
      <div className="mt-20">
         {/* {isAuthenticated && ( */}
        {/* //   <div className="">
        //     <img src={user.profile} alt={user.name} />
        //     <h2 className="">{user.name}</h2>
        //   </div>
        // )} */}

        <div className="flex flex-col gap-4">
          <p>Item</p>
          <p className="">Price</p>
          <p>Quantity</p>
          <p className="">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="">
          {cartItems && cartItems.map((curElem) => {
            return <CartItem key={curElem.id} productData={curElem} />;
          })}
        </div>
        <hr />
        <div className="">
          <Link to="/products">
            <button> continue Shopping </button>
          </Link>
          <button className="" onClick={()=> dispatch(clearCart())}>
            clear cart
          </button>
        </div>

        {/* order total_amount */}
        <div className="">
          <div className="">
            <div>
              <p>subtotal:</p>
              <p>
                {/* {formatPrice(total_price)} */}
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                {/* {formatPrice(shipping_fee)} */}
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                {/* {formatPrice(shipping_fee + total_price)} */}
              </p>
            </div>
          </div>
        </div>
      </div>
);
}

export default Cart
