import React from 'react'
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import { Outlet, useLoaderData } from 'react-router-dom'
import Categories from '../components/Categories'

export default function Home() {
  const categories=useLoaderData()
  // console.log(categories)
  return (
    <div>
      {/* Banner section */}
      <Banner></Banner>


      {/* heading */}
      <Heading title={'Browse coffees By Categories'} subTitle={'Chose your favorite coffee'}></Heading>


      {/* Categories button */}
      <Categories categories={categories}></Categories>
     


      {/* Dynamic nested components */}
      <Outlet></Outlet>
    </div>
  )
}
