import React from 'react'
import FilterSection from './FilterSection'
import SortSection from './SortSection'
import ProductList from './ProductList'

const ProductsPage = () => {
  return (
      <div className="mt-20 mr-3 md:mx-auto lg:mx-5 xl:mx-20 2xl:mx-auto md:max-w-4xl lg:max-w-full 2xl:max-w-screen-2xl flex justify-between">
          <FilterSection />

        <section className="">
            <SortSection />
            <ProductList />
        </section>
      </div>
  )
}

export default ProductsPage
