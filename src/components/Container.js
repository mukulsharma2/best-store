import React from "react";
import { Link } from "react-router-dom";
import shopping from "../images/shopping.jpg";

const Container = ({ name }) => {
  return (
    <div className="max-w-screen-lg mx-5 lg:mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start">
      <div className="w-3/4 sm:w-1/2">
        <p className="uppercase font-medium text-lg">Welcome To</p>
        <h1 className="-ml-1 my-3 text-5xl font-semibold">{name}</h1>
        <p>
          This is an e-commerce website for all your needs. Here you can find
          all the necessary items for daily needs and also electronic items like
          mobile phones and laptop.
        </p>
        <Link to="/products">
          <button className="mt-4 text-2xl px-5 py-2 rounded-2xl bg-[#6254F3] text-[#FFFFFF] transition-all hover:shadow-lg hover:bg-[#6c61db]">
            SHOP NOW
          </button>
        </Link>
      </div>

      <div className="bg-[#6254F3] w-64 h-40 md:w-72 md:h-48 relative mt-8 sm:mt-3 ml-12 sm:ml-0">
        <img
          src={shopping}
          alt="family shopping"
          className="absolute top-1/4 right-[18%] w-full h-full z-10"
        />
      </div>
    </div>
  );
};

export default Container;
