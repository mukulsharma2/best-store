import React, { useEffect } from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { setGridView, setListView, setSortedData, sortProducts } from '../store/productSlice';

const SortSection = () => {
const dispatch = useDispatch()

const showGridView = useSelector((store)=> store.product.showGridView)
const data = useSelector((store)=> store.app.data)

  useEffect(() => {
    dispatch(setSortedData(data))
  }, [data, dispatch])


  return (
    <div className='flex justify-between'>
      {/* 1st column  */}
      <div className="">
        <button
          className={showGridView ? "bg-black text-white" : ""}
          onClick={()=>dispatch(setGridView())}>
          <BsFillGridFill size='2rem' className="p-1" />
        </button>

        <button
          className={!showGridView ? "bg-black text-white" : ""}
          onClick={()=>dispatch(setListView())}>
          <BsList size='2rem' className="p-1" />
        </button>
      </div>

      {/* 2nd column  */}
      <div className="">
        <p>{`${data.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="">
        <form action="#">
          <select
            name="sort"
            className=""
            onChange={(e)=>dispatch(sortProducts(e.target.value))}
            >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default SortSection
