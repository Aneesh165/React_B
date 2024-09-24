import React from 'react'
import ChildC from './ChildC'

function ChildB({message}) {
  return (
    <div>ChildB {message}
        <ChildC data={message}/>
    </div>
  )
}

export default ChildB