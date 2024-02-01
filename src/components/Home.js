import React from 'react'
import Container from './Container'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {
  return (
    <div className='mt-20'>
      <Container name="Best Store" />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home
