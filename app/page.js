'use client'
import { useState } from 'react'

import Search from './components/Search'
import Navbar from './components/Navbar'
import Card from './components/Card'

import {BsCart,BsSearch,BsHeart,BsPerson} from 'react-icons/bs'

const Page = ({products}) => {
  const [searchTerm, setSearchTerm] = useState('')

  if(searchTerm){
    products = products.filter(p => p.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }  

  return (
    <>
      <Search setSearchTerm={setSearchTerm}/>
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

export async function getServerSideProps(){
  const products = await getProducts()

  return{
    props: {
      products: products
    }
  }
}