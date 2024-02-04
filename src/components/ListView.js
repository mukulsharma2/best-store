import React from 'react'
import { Link } from 'react-router-dom';
import { formatPrice } from "../helper/constants";

const ListView = ({products}) => {
  return (
    <div className="flex flex-col">
    {products && products.map((curElem) => {
      const { id, name, image, price, description } = curElem;

      return (
        <div className="flex gap-5">
          <figure>
            <img src={image} alt={name} className='w-80' />
          </figure>

          <div className="">
            <h3>{name}</h3>
            <p>
              {formatPrice(price)}
            </p>
            <p>{description.slice(0, 90)}...</p>

            <Link to={`/singleproduct/${id}`} className="">
              <button className="hover:bg-[#6254F3] px-5 py-2 font-semibold text-xl hover:text-white border border-black transition-all">Read More</button>
            </Link>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default ListView
