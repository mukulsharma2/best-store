import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const FeaturedProducts = () => {
    const [featuredData, setFeaturedData] = useState([])
    const data = useSelector((store)=> store.app.data)
    const isLoading = useSelector((store)=> store.app.isLoading)
    console.log(data);
    console.log(featuredData);
    
    useEffect(()=>{
        const filteredData = data.filter((curElem) => {
            return curElem.featured === true;
        });
        setFeaturedData(filteredData)
    }, [data])

if(isLoading) return <div>Loading...</div>

  return (<>
    <div className="border-t-2 mt-20 border-slate-500 w-1/3 mx-auto"></div>
      <div className="bg-slate-100 mt-20 px-5 pb-12 pt-7 h-96">
        <div className="mb-5 mx-auto w-fit text-3xl font-semibold">Our Featured Products</div>
        <div className="grid grid-cols-3 h-72">
          {
           featuredData && featuredData.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
            })
           }
        </div>
      </div></>
  )
}

export default FeaturedProducts
