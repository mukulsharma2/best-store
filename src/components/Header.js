import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='h-14 bg-slate-400 flex justify-between items-center'>
            <Link className="flex items-center">
                <img src={logo} alt="best cart logo" className='w-12 h-12 ml-2' />
                <span className='ml-2 font-extrabold text-2xl'>BEST STORE</span>
            </Link>
        <Navbar/>
    </div>
  )
}

export default Header
