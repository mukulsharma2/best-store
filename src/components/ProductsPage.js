import React from 'react'
import FilterSection from './FilterSection'
import SortSection from './SortSection'
import ProductList from './ProductList'

const ProductsPage = () => {
  return (
      <div className="mt-20 mx-20 flex justify-between">
        <div>
          <FilterSection />
        </div>

        <section className="">
          <div className="">
            <SortSection />
          </div>
          <div className="">
            <ProductList />
          </div>
        </section>
      </div>
  )
}

export default ProductsPage
