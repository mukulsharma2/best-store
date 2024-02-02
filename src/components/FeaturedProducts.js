import React from 'react'
import { useSelector } from 'react-redux'

const FeaturedProducts = () => {
const data = useSelector((store)=> store.app.data)
console.log(data);

  return (
    <div>
      <div className="">
        <div className="">Check Now!</div>
        <div className="">Our Feature Services</div>
        <div className="grid grid-cols-3">
          {/* {featuredProducts.map((curElem) => { */}
            {/* // return <Product key={curElem.id} {...curElem} />; */}
        {/* //   })} */}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
