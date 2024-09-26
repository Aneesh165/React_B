import React, { useContext } from 'react'
import { users } from './Usercontext'



function FirstChild() {
 const data= useContext(users)

  return (
    <div>
      <h1 >Melcow
        <h1>{data}</h1>
      </h1>
      
    </div>
  )
}

export default FirstChild