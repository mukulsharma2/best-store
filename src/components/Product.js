import React from 'react'
import { Link } from 'react-router-dom'

const Product = (currEle) => {
  const {id, name, price, image} = currEle

  return (
      <Link to={`/singleproduct/:${id}`} className='w-fit m-auto'>
          <div className="bg-white w-fit rounded-2xl p-5">
            <img src={image} alt={name} className='w-64 rounded-2xl' />

            <div className="ml-1">
                <h3 className="my-1 font-medium text-lg">{name}</h3>
                <p>{price}</p>
            </div>
          </div>
      </Link>
  )
}

export default Product
