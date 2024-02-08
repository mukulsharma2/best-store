import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { toggleMenu } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
const cartItems = useSelector(store => store.cart.cartItems)
const dispatch = useDispatch();
const { loginWithRedirect, logout, isAuthenticated, user  } = useAuth0();

let totalQuantity =  useMemo(() => {
  return cartItems.reduce((acc, curr)=>{
    acc += curr.quantity
    return acc
  }, 0)
}, [cartItems])

  return (
    <div>
    <ul className={"flex flex-col sm:flex-row gap-8 font-semibold text-2xl sm:text-base" + (!isMenuOpen ? " hidden sm:flex" : "")}>
      <Link to={"/"} onClick={()=> dispatch(toggleMenu())}>
        <li>Home</li>
      </Link>
      <Link to={"/about"} onClick={()=> dispatch(toggleMenu())}>
        <li>About</li>
      </Link>
      <Link to={"/products"} onClick={()=> dispatch(toggleMenu())}>
        <li>Products</li>
      </Link>
      <Link to={"/contact"} onClick={()=> dispatch(toggleMenu())}>
        <li>Contact</li>
      </Link>
      <Link to={"/cart"} className="w-fit mr-8 flex items-center text-2xl relative" onClick={()=> dispatch(toggleMenu())}>
        <FiShoppingCart />
        <span className="absolute w-5 h-5 text-xs bg-gray-500 text-white rounded-3xl top-[-20%] left-[70%] grid place-items-center">
          <span>{totalQuantity}</span>
        </span>
      </Link>

      {user && <div
            onMouseEnter={() =>
              document.getElementById("name").classList.remove("hidden")
            }
            onMouseLeave={() =>
              document.getElementById("name").classList.add("hidden")
            }
            className="flex relative"
          >
            <img
              className="w-6 sm:w-7 md:w-8 mr-1 rounded-full"
              src={user.picture}
              alt={user.name}
            />
            <span
              id="name"
              className="h-fit text-center hidden border border-black rounded-2xl py-1 px-1 sm:px-2 bg-white z-10 absolute bottom-[-3rem] sm:right-0 sm:top-11 text-xs sm:text-base"
            >
              {user.name || user.nickname}
            </span>
          </div>}

      {isAuthenticated? (<li>
        <button className="bg-[#6254F3] text-white px-2 py-1 font-semibold text-lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
      </li>) : (<li>
        <button className="bg-[#6254F3] text-white px-2 py-1 font-semibold text-lg" onClick={() => loginWithRedirect()}>Log In</button>
      </li>)}
    </ul>

    <div className="w-fit absolute right-4 top-4">
      {
      !isMenuOpen && <CgMenu size='2rem' className="cursor-pointer sm:hidden" onClick={()=> dispatch(toggleMenu())} />
      }
      {
      isMenuOpen && <CgClose size='2rem' className="cursor-pointer sm:hidden" onClick={()=> dispatch(toggleMenu())} />
      }
    </div>
    </div>
  );
};

export default Navbar;
