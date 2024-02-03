import React, { useEffect } from 'react'
import Container from './Container'
import Services from './Services'
import Trusted from './Trusted'
import FeaturedProducts from './FeaturedProducts'
import { useDispatch } from 'react-redux'
import { addData, setLoadingTrue, setLoadingFalse } from '../store/appSlice'
import { API } from '../helper/constants'

const Home = () => {
const dispatch = useDispatch()

useEffect(()=>{
  async function fetchData () {
    dispatch(setLoadingTrue())
    try {
      const data = await fetch(API)
      const json = await data.json()
      dispatch(addData(json))
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoadingFalse())
  }
  
  fetchData()
})

  return (
    <div className='mt-20'>
      <Container name="Best Store" />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home
