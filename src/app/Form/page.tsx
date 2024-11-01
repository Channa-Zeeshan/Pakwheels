import React from 'react'
import Link from 'next/link'

const Form = () => {
  return (
    <div  className='flex flex-col bg-blue-200 h-screen w-full  text-center'>
        <h1 className='font-bold text-3xl mt-3'> Enter your detail</h1>
        <div className='flex w-10/12 m-auto border border-black p-24 justify-center'> 
        <form className='flex flex-col items-center justify-center'>
        <input type="text"  placeholder="Enter Your Name" className='w-72 p-3 m-2 '></input>
        <input type="text"  placeholder="Enter Your Email" className='w-72 p-3 m-2 '></input>
        <input type="text"  placeholder="Cell Number " className='w-72 p-3 m-2'></input>
        <input type="text"  placeholder="Address" className='w-72 p-3 m-2'></input>
        <Link href="./Thank">
        <button className='bg-blue-800 p-3 text-white rounded mt-3 m-2'> Place Your Order</button>
        </Link>
        
        </form>
         </div>


    </div>
  )
}

export default Form