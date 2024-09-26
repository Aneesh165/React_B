import React, { useContext } from 'react'
import { users } from './Usercontext'

function Secondchild() {

  const input =useContext(users)
  return (
    <div>
      <h3>Secondchild</h3>
      <h3>{input}</h3>
    </div>
  )
}

export default Secondchild