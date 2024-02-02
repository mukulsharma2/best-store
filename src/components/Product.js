import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

const Product = (currEle) => {
  const {id, name, price, image, category} = currEle

const formatedPrice = useMemo(() => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
    }).format(price / 100)
}, [price])

  return (
      <Link to={`/singleproduct/:${id}`} className='w-fit m-auto hover:shadow-xl hover:z-10'>
          <div className="bg-white w-fit rounded-2xl p-5 relative">
            <img src={image} alt={name} className='w-64 hover:w-[17rem] rounded-2xl' />
            <span className='absolute top-8 right-8 bg-white rounded-lg uppercase text-sm px-1'>{category}</span>
            <div className="m-1 mt-3 flex justify-between">
                <h3 className="font-medium text-lg">{name}</h3>
                <p>{formatedPrice}</p>
            </div>
          </div>
      </Link>
  )
}

export default Product
