import React, { useState } from 'react'

function Functionstate() {

    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button>Click</button>
    </div>
  )
}

export default Functionstate