import React, { useEffect } from 'react'
import {formatPrice} from '../helper/constants'
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../store/productSlice';

const FilterSection = () => {
  const dispatch = useDispatch()
  const data = useSelector(store=>store.app.data)
  const filters = useSelector(store=>store.product.filters)

const getParticularData = (data, property)=>{
let particularData = data.map((currEle)=>{
  return currEle[property]
})
return (particularData = ['All', ...new Set(particularData)])
}

const categoryData = getParticularData(data, 'category')

useEffect(()=>{
  
},[])

  return (
    <div>
      <div className="">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            onChange={(e)=>{
              dispatch(filterProducts({
                name: e.target.name,
                value: e.target.value,
                fullData: data,
              }))
            }}
          />
        </form>
      </div>

       <div className="">
        <h3>Category</h3>
        <div>
          {categoryData && categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === filters.category ? "text-blue-600 border-b" : ""}
                onClick={(e)=>{
                  dispatch(filterProducts({
                    name: e.target.name,
                    value: e.target.value,
                    fullData: data,
                  }))
                }}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      {/* <div className="">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className=""
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="">
        <h3>Colors</h3>

        <div className="">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className=""
                  onClick={updateFilterValue}>
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
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="">
        <h3>Price</h3>
        <p>
          {formatPrice(price)}
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="">
        <button className="" onClick={clearFilters}>
          Clear Filters
        </button>
      </div> */}
    </div>
  )
}

export default FilterSection
