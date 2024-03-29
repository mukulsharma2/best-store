import React, { useEffect } from "react";
import { formatPrice } from "../helper/constants";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, filterProducts } from "../store/productSlice";

const FilterSection = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.app.data);
  const filters = useSelector((store) => store.product.filters);

  const getParticularData = (data, property) => {
    let particularData = data.map((currEle) => {
      return currEle[property];
    });
    if (property === "colors") {
      particularData = particularData.flat();
    }
    if (property === "price") {
      return particularData;
    }
    // removing duplicates of category and company by using set data type
    return (particularData = ["all", ...new Set(particularData)]);
  };

  const categoryData = getParticularData(data, "category");
  const companyData = getParticularData(data, "company");
  const colorsData = getParticularData(data, "colors");
  const priceData = getParticularData(data, "price");

  const maxPrice = Math.max(...priceData);
  const minPrice = Math.min(...priceData);

  useEffect(() => {
    dispatch(
      filterProducts({
        name: "price",
        value: maxPrice,
        fullData: data,
      })
    );
  }, [dispatch, data, maxPrice]);

  return (
    <div className="w-1/3 sm:w-auto sm:ml-4 lg:ml-0 2xl:ml-8">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="text"
          value={filters.text}
          placeholder="Search"
          onChange={(e) => {
            dispatch(
              filterProducts({
                name: e.target.name,
                value: e.target.value,
                fullData: data,
              })
            );
          }}
          className="px-2 py-1 mb-3 w-full outline-none border"
        />
      </form>

      <div className="mb-3">
        <h3 className="font-semibold">Category</h3>
        <div className="flex flex-col gap-3">
          {categoryData &&
            categoryData.map((curElem) => {
              return (
                <button
                  key={curElem}
                  type="button"
                  name="category"
                  value={curElem}
                  className={
                    curElem === filters.category ? "text-blue-600 border-b" : ""
                  }
                  onClick={(e) => {
                    dispatch(
                      filterProducts({
                        name: e.target.name,
                        value: e.target.value,
                        fullData: data,
                      })
                    );
                  }}
                >
                  {curElem}
                </button>
              );
            })}
        </div>
      </div>

      <div className="mb-3">
        <h3 className="font-semibold mb-2">Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="p-1 outline-none border cursor-pointer"
            onChange={(e) => {
              dispatch(
                filterProducts({
                  name: e.target.name,
                  value: e.target.value,
                  fullData: data,
                })
              );
            }}
          >
            {companyData &&
              companyData.map((curElem, index) => {
                return (
                  <option key={index + 100} value={curElem} name="company">
                    {curElem}
                  </option>
                );
              })}
          </select>
        </form>
      </div>

      <div>
        <h3 className="font-semibold">Colors</h3>

        <div className="mb-3 flex">
          {colorsData &&
            colorsData.map((curColor, index) => {
              if (curColor === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    className={
                      "w-6 h-6" +
                      (filters.color === curColor
                        ? " text-blue-600 border-b"
                        : "")
                    }
                    onClick={(e) => {
                      dispatch(
                        filterProducts({
                          name: e.target.name,
                          value: e.target.value,
                          fullData: data,
                        })
                      );
                    }}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className={
                    "pl-[3px] hover:opacity-100 w-6 h-6 rounded-full border border-black" +
                    (filters.color === curColor
                      ? " opacity-100"
                      : " opacity-50")
                  }
                  onClick={(e) => {
                    dispatch(
                      filterProducts({
                        name: e.target.name,
                        value: e.target.value,
                        fullData: data,
                      })
                    );
                  }}
                >
                  {filters.color === curColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            })}
        </div>
      </div>

      <div>
        <h3 className="font-semibold">Price</h3>
        <p>{formatPrice(minPrice) + " to " + formatPrice(filters.price)}</p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={filters.price}
          onChange={(e) => {
            dispatch(
              filterProducts({
                name: e.target.name,
                value: e.target.value,
                fullData: data,
              })
            );
          }}
          className="cursor-pointer w-full"
        />
      </div>

      <button
        className="mt-3 bg-[#6254F3] text-white px-2 py-1 font-medium hover:shadow-xl"
        onClick={() =>
          dispatch(
            clearFilters({
              fullData: data,
              maxPrice,
            })
          )
        }
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSection;
