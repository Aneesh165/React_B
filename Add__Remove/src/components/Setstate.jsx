import React, { useState } from 'react'

function Setstate() {
    // const[state,Setstate]=useState(intial);

    const[count,setCount]=useState(0);

    const increase = ()=>{
        setCount(count+1)
    }
    const decrease=()=>{
        setCount(count-1)
    }
  return (
    <div style={{marginLeft:'20%',marginTop:'5%'}}>
        <h1>Counter:{count}</h1>
        <div style={{display:'flex',gap:'15px'}}>
        <button onClick={decrease}>decrease</button>
        <button onClick={increase}>Increment</button>
        </div>
    </div>
  )
}

export default Setstate