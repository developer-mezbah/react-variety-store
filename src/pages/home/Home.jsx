import React from 'react'
import Banner from '../../component/Banner'
import ProductCategory from '../../component/ProductCategory'
import PopularProducts from '../../component/PopularProducts'
import {useLoaderData} from "react-router-dom"

const Home = () => {
  const products = useLoaderData()
  return (
    <div>
      <Banner/>
      <ProductCategory/>
      <PopularProducts data={products}/>
    </div>
  )
}

export default Home