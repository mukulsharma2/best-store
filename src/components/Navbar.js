import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
    <ul className={"flex flex-col sm:flex-row gap-5 font-semibold text-2xl sm:text-base" + (!isMenuOpen && " hidden sm:flex")}>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <Link to={"/about"}>
        <li>About</li>
      </Link>
      <Link to={"/products"}>
        <li>Products</li>
      </Link>
      <Link to={"/contact"}>
        <li>Contact</li>
      </Link>
      <Link to={"/cart"} className="mr-4 flex items-center text-2xl relative">
        <FiShoppingCart />
        <span className="absolute w-5 h-5 text-xs bg-gray-500 text-white rounded-3xl top-[-20%] left-[70%] grid place-items-center">
          <span>10</span>
        </span>
      </Link>
    </ul>

    <div className="w-fit absolute right-4 top-4">
      {
      !isMenuOpen && <CgMenu size='2rem' className="cursor-pointer sm:hidden" onClick={()=> setIsMenuOpen(!isMenuOpen)} />
      }
      {
      isMenuOpen && <CgClose size='2rem' className="cursor-pointer sm:hidden" onClick={()=> setIsMenuOpen(!isMenuOpen)} />
      }
    </div>
    </div>
  );
};

export default Navbar;
