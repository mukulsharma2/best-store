import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const FeaturedProducts = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const data = useSelector((store) => store.app.data);
  const isLoading = useSelector((store) => store.app.isLoading);

  useEffect(() => {
    const filteredData = data.filter((curElem) => {
      return curElem.featured === true;
    });
    setFeaturedData(filteredData);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="border-t-2 mt-20 border-slate-500 w-1/3 mx-auto"></div>
      <div className="bg-slate-100 mt-20 px-5 pb-12 pt-7 h-fit">
        <h3 className="mb-5 mx-auto w-fit text-2xl lg:text-3xl font-semibold text-center">
          Our Featured Products
        </h3>
        <div className="flex flex-wrap gap-8 lg:h-64">
          {featuredData &&
            featuredData.map((curElem) => {
              return (
                <Product key={curElem.id} data={curElem} hoverEffect={true} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
