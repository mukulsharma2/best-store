import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const showGridView = useSelector((store)=> store.product.showGridView)
  const data = useSelector((store)=> store.app.data)

  return (
    <div>
      {showGridView? <GridView products={data} /> : <ListView products={data} />}
    </div>
  )
}

export default ProductList
