import React from 'react'
import { Link } from 'react-router-dom'
import shopping from '../images/shopping.jpg'

const Container = ({name}) => {
  return (
    <div className='max-w-screen-xl mx-auto grid gap-36 grid-cols-2'>
      <div className="">
        <p className='uppercase font-medium text-lg'>Welcome To</p>
        <h1 className='-ml-1 my-3 text-5xl font-semibold'>{name}</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti autem alias, ratione eaque sunt non doloribus sint, eveniet nisi officiis voluptatum eius impedit cumque molestias ab ad quos debitis dolorem animi quam?
        </p>
        <Link>
            <button className='mt-4 text-2xl px-5 py-2 rounded-2xl bg-[#6254F3] text-[#FFFFFF] transition-all hover:shadow-lg hover:bg-[#6c61db]'>SHOP NOW</button>
        </Link>
      </div>

     <div className="">
        <img src={shopping} alt="family shopping" />
     </div>
    </div>
  )
}

export default Container
