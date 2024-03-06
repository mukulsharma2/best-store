import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 2xl:gap-4 w-full">
      {products &&
        products.map((curElem, index) => {
          return (
            <Product key={curElem.id + index} data={curElem} hoverEffect={false} />
          );
        })}
    </div>
  );
};

export default GridView;
