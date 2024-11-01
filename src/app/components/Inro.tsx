import React from 'react'

const Inro = () => {
  return (
    <div className="w-full h-72 bg-gradient-to-b from-black to-blue-700 text-white content-center flex justify-center text-center items-center">
    <div className="w-2/3 flex flex-col ">
    <h1 className='text-4xl'>Find Used Cars in Pakistan</h1>
    <h2 className='text-xl'>With thousands of Cars, we have just the right for you</h2>
    <div className=' mt-7'><form className='flex flex-row w-full text-center justify-center items-center '> <input type="text" placeholder='Car Make Model' className='w-4/12 p-3 h-full'/> 
    <button className=' flex flex-row border border-black  bg-white text-black  w-3/12 justify-between p-2'>Cities
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</button>
<button className=' flex flex-row  bg-white text-black w-3/12 justify-between p-2'>Price Range
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</button>
<button className=' bg-green-800 rounded w-1/12 p-2'> Search </button>

    

    </form> </div>
    <div className='flex justify-center w-full'>
    
<button className='mt-8 flex flex-row justify-center items-center  border border-white w-44 h-12'>
 Advanced Filter <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</button>
</div>

    </div>
   </div>
  )
}

export default Inro