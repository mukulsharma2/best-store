import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { toggleMenu } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
const cartInfo = useSelector((store)=> store.cart.cartInfo);
const dispatch = useDispatch();
const {totalQuantity} = cartInfo

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
