import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
  console.log(products);
  return (
    <div className='grid grid-cols-3 gap-2 w-full'>
      {products && products.map((curElem)=>{
        return <Product key={curElem.id} data={curElem} hoverEffect={false} />;
      })}
    </div>
  )
}

export default GridView
