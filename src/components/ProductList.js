import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const isGridView = useSelector((store)=> store.product.isGridView)
  const data = useSelector((store)=> store.app.data)

  return (
    <div>
      {isGridView? <GridView products={data} /> : <ListView products={data} />}
    </div>
  )
}

export default ProductList
