import React from 'react'
import { Link } from 'react-router-dom';
import { formatPrice } from "../helper/constants";

const ListView = ({products}) => {
  return (
    <div className="flex flex-col mx-2">
    {products && products.map((curElem) => {
      const { id, name, image, price, description } = curElem;

      return (
        <div className="flex gap-3 sm:gap-5 my-3" key={id}>
          <figure>
            <img src={image} alt={name} className='mt-3 xl:mt-0 w-48 md:w-80' />
          </figure>

          <div className="">
            <h3 className='font-bold mb-2 lg:mb-4 text-xl'>{name}</h3>
            <p>
              {formatPrice(price)}
            </p>
            <p className='my-2 lg:my-4 hidden md:block'>{description.slice(0, 90)}...</p>

            <Link to={`/singleproduct/${id}`} className="">
              <button className="hover:bg-[#6254F3] px-1 sm:px-5 py-1 lg:py-2 font-semibold text-sm  sm:text-lg lg:text-xl hover:text-white border border-black transition-all">Read More</button>
            </Link>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default ListView
