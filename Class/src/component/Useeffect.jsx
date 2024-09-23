import React, { useEffect } from 'react'

function Useeffect() {

    // Useeffect-sideeffect, rending, lazyloading

    // useEffect(()=>{
    //     callback},[dependency]        
    // })



  return (
    <div className='w-40 mx-auto mt-10'>
        <h1>Heading</h1>
        <button className='bg-stone-700 text-white px-6 text-lg rounded font-semibold' onClick={()=>{alert('Hi!')}}>Click</button>
    </div>
  )
}

export default Useeffect