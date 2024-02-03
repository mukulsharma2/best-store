import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const Header = () => {
const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);

  return (
    <div className={'fixed top-0 w-screen h-screen sm:h-14 bg-slate-400 flex flex-col sm:flex-row sm:justify-between items-center z-50' + (!isMenuOpen ? " h-14" : "")}>
            <Link to='/' className="flex items-center">
                <img src={logo} alt="best cart logo" className='w-12 h-12 ml-2' />
                <span className='ml-2 font-extrabold text-2xl'>BEST STORE</span>
            </Link>
        <Navbar/>
    </div>
  )
}

export default Header
