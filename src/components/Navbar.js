import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { openMenu, closeMenu } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  let totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0);
  }, [cartItems]);

  return (
    <div>
      <ul
        className={
          "flex flex-col items-center sm:flex-row gap-8 sm:gap-4 md:gap-8 font-semibold text-2xl sm:text-base ml-2" +
          (!isMenuOpen ? " hidden sm:flex" : " mt-12 sm:mt-0")
        }
      >
        <Link to={"/"} onClick={() => dispatch(closeMenu())}>
          <li>Home</li>
        </Link>
        <Link to={"/about"} onClick={() => dispatch(closeMenu())}>
          <li>Infinite Scroll</li>
        </Link>
        <Link to={"/products"} onClick={() => dispatch(closeMenu())}>
          <li>Products</li>
        </Link>
        <Link to={"/contact"} onClick={() => dispatch(closeMenu())}>
          <li>Contact</li>
        </Link>
        <Link
          to={"/cart"}
          className="w-fit flex items-center text-2xl relative"
          onClick={() => dispatch(closeMenu())}
        >
          <FiShoppingCart />
          <span className="absolute w-5 h-5 text-xs bg-gray-500 text-white rounded-3xl top-[-20%] left-[70%] grid place-items-center">
            <span>{totalQuantity}</span>
          </span>
        </Link>

        {user && (
          <div
            onMouseEnter={() =>
              document.getElementById("name").classList.remove("hidden")
            }
            onMouseLeave={() =>
              document.getElementById("name").classList.add("hidden")
            }
            className="flex relative"
          >
            <img
              className="h-7 w-7 md:w-8 md:h-8 rounded-full"
              src={user.picture}
              alt=""
            />
            <span
              id="name"
              className="h-fit text-center hidden border border-black rounded-2xl py-1 px-1 sm:px-2 bg-white z-10 absolute bottom-[-3rem] sm:right-0 sm:top-11 text-xs sm:text-base"
            >
              {user.name || user.nickname}
            </span>
          </div>
        )}

        {isAuthenticated ? (
          <li className="m-auto sm:mr-4">
            <button
              className="bg-[#6254F3] text-white px-2 py-1 font-semibold text-lg sm:text-sm md:text-lg"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li className="m-auto sm:mr-4">
            <button
              className="bg-[#6254F3] text-white px-2 py-1 font-semibold text-lg sm:text-sm md:text-lg"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </li>
        )}
      </ul>

      <div className="w-fit absolute right-4 top-4">
        {!isMenuOpen && (
          <CgMenu
            size="2rem"
            className="cursor-pointer sm:hidden"
            onClick={() => dispatch(openMenu())}
          />
        )}
        {isMenuOpen && (
          <CgClose
            size="2rem"
            className="cursor-pointer sm:hidden"
            onClick={() => dispatch(closeMenu())}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
