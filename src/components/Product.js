import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const Product = ({ data, hoverEffect }) => {
  const { id, name, price, image, category } = data;

  const formatedPrice = useMemo(() => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(price / 100);
  }, [price]);

  return (
    <Link
      to={`/singleproduct/${id}`}
      className={
        "w-72 m-auto hover:shadow-xl hover:z-10 transition-all" +
        // only show hover effect on home screen featured products
        (hoverEffect ? " lg:hover:w-[19rem]" : " w-48 md:w-72")
      }
    >
      <div className="bg-white w-full rounded-2xl p-1 md:p-5 relative">
        <img src={image} alt={name} className="w-full rounded-2xl" />
        <span className="absolute top-8 right-8 bg-white rounded-lg uppercase text-sm px-1">
          {category}
        </span>
        <div className="m-1 mt-3 flex justify-between">
          <h3 className="font-medium text-lg">{name}</h3>
          <p>{formatedPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
