import React from 'react'
import Image from 'next/image'
import corolla from './corolla.jpg'
import Honda from './Honda.jpg'
import Changan from './Changan.jpg'
import Link from 'next/link'

const FeaturedCars = () => {
  return (
    <div className='w-full bg-gray-200 h-2/4' >  
    <div className='w-5/6  m-auto'>
    <h1 className='text-3xl p-6'> Featured New Cars</h1>
    <div className='flex gap-20 ml-6 mb-10'>
    <button className='  border-blue-800  border-b-2 p-4'> Popular </button>
    <button> Upcoming </button>
    <button> Newly Launched </button>

    </div>

    </div>

    <div className='w-5/6 m-auto flex justify-between p-6'> 
    <div className=' flex flex-col text-center bg-white'>
    <Link href="../Corolla" >   <Image alt="corolla"src={corolla} className='w-72'/> 
       <h2> Toyota Corolla</h2>
       <h2 className='text-green-800 text-lg'> Price : 50 Lacs</h2>
       </Link>
    </div>
    <div className='flex flex-col text-center bg-white'> 
      <Link href="../Civic">
      <Image alt="Honda"src={Honda} className='w-72'/><h2> Honda Civic</h2> 
      <h2 className='text-green-800 text-lg'> Price : 70 Lacs</h2></Link>
      </div>
    <div className='flex flex-col text-center bg-white'>
      <Link href="../Changan">
       <Image alt="Changan"src={Changan} className='w-72'/> 
       <h2> Changan</h2> 
       <h2 className='text-green-800 text-lg'> Price : 90 Lacs</h2> </Link>

       </div>

    
    </div>
    </div>
  )
}

export default FeaturedCars