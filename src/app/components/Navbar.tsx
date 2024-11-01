import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black text-white'> 
    <div className='w-4/5 m-auto flex flex-row justify-between items-center p-3'>  
    <h1  className='font-bold text-2xl'> PakWheels.com </h1> 
    <h2> Used Cars</h2>
    <h2> New Cars</h2>
    <h2>Bikes</h2>
    <h2> Auto Store</h2>
    <h2> Videos</h2>
    <h2> Forums</h2>
    <h2> Blogs </h2>
    <h2> More</h2>
    <button className='bg-red-800 p-3 text-white rounded mt-3 m-2'> Post an Add</button>
    </div>
    </div>
  )
}

export default Navbar