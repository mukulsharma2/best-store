import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const showGridView = useSelector((store)=> store.product.showGridView)
  const sortedData = useSelector((store)=> store.product.sortedData)

  return (
    <div>
      {showGridView? <GridView products={sortedData} /> : <ListView products={sortedData} />}
    </div>
  )
}

export default ProductList
