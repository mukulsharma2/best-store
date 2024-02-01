import React from 'react'
import { Link } from 'react-router-dom'
import shopping from '../images/shopping.jpg'

const Container = ({name}) => {
  return (
    <div className='max-w-screen-lg mx-auto flex justify-between'>
      <div className="w-1/2">
        <p className='uppercase font-medium text-lg'>Welcome To</p>
        <h1 className='-ml-1 my-3 text-5xl font-semibold'>{name}</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti autem alias, ratione eaque sunt non doloribus sint, eveniet nisi officiis voluptatum eius impedit cumque molestias ab ad quos debitis dolorem animi quam?
        </p>
        <Link>
            <button className='mt-4 text-2xl px-5 py-2 rounded-2xl bg-[#6254F3] text-[#FFFFFF] transition-all hover:shadow-lg hover:bg-[#6c61db]'>SHOP NOW</button>
        </Link>
      </div>

     <div className="bg-[#6254F3] w-72 h-48 relative">
        <img src={shopping} alt="family shopping" className='absolute top-1/4 right-[18%] w-full h-full z-10' />
     </div>
    </div>
  )
}

export default Container
