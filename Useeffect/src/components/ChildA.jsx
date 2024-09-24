import React from 'react'
import ChildB from './ChildB'

const ChildA = ({data}) => {
  return (
    <div>ChildA {data}
        <h1> <ChildB  message={data}/> </h1>
    </div>
  )
}

export default ChildA