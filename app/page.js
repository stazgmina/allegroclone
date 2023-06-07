'use client'
import React, { useEffect, useState } from 'react'

import Search from './components/Search'
import Navbar from './components/Navbar'
import Card from './components/Card'

import {BsCart,BsSearch,BsHeart,BsPerson} from 'react-icons/bs'

const Page = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  },[])

  return (
    <>
      <Search/>
      <Navbar/>
      <section className='flex flex-wrap items-center justify-center w-full gap-16 bg-white'>
        {products.map(product => (
          <Card key={product.id} {...product}/>
        ))}
      </section>
    </>
  )
}

export default Page