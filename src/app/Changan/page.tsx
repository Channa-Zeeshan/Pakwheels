import React from 'react'
import Image from 'next/image'
import Changanpic from '../components/Changan.jpg'
import Link from 'next/link'

const Changan = () => {
  return (
    <div className='w-full h-screen bg-green-300 flex items-center'>
    <div className='w-2/3 m-auto flex flex-col justify-center items-center content-center'>
      <h1 className=' font-bold text-3xl underline mb-5'> Changan , Price, Image and Details </h1>
        <Image  src={Changanpic} alt='' className='w-64'/>
        <div className=' flex justify-around w-2/3 mt-5'> 
        <button className='bg-blue-800 p-3 text-white rounded'> Book a Test Drive</button>
        <button className=' bg-white text-black hover:bg-blue-800 p-3  hover:text-white rounded border border-blue-800'> Request Bank Finance</button>
        <button className=' bg-white text-black hover:bg-blue-800 p-3  hover:text-white rounded border border-blue-800'> Visit Place</button>
        <button className=' bg-white text-black hover:bg-blue-800 p-3  hover:text-white rounded border  border-blue-800'> Car Inspection</button>
        
        </div>
        <div className='flex mt-4'>  <h1> No. of Doors :</h1> <h2> 4  ,</h2>
               <h1> Engne :</h1> <h2> 1800cc  ,</h2>
               <h1> Condition  :</h1> <h2> 8/10  ,</h2>
        
        
        
        </div>
        <Link href="./Form">
        <button className='bg-blue-800 p-3 text-white rounded mt-3'> Make Payment</button> </Link>

    </div>
    </div>
  )
}

export default Changan