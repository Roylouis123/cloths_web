import React from 'react'

const Dasboard = () => {
  return (
    <div className=' bg-yellow-300' style={{height: '100vh'}}>

        <div className=' text-9xl font-bold font-sans align-middle flex justify-center h-72 p-28'>
            BUY 1 GET 1 FREE
        </div>

        <div className=' text-3xl font-sans align-middle flex justify-center h-12 p-2'>
            ON SELECT COLLECTION
        </div>

        <div className=' text-5xl font-bold font-sans align-middle flex justify-center h-24 p-6'>
            <span>USE CODE:&nbsp;</span>
            <span className=' text-5xl  h-14 border-2 px-2 border-black'>GETLIT</span>
        </div>

        <div className=' text-4xl font-bold font-sans flex justify-center h-32 p-8'>
            <span className=' h-14 p-2 align-middle bg-white px-5'>SHOP THE COLLECTION</span>
        </div>


    </div>
  )
}

export default Dasboard