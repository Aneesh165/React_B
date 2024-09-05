import React from 'react'
import Sample from './sample'

function New(props) {
  return (<>
    <h1>HI {props.name}</h1>
    <Sample place={"ooty"}/>
    </>
  )
}

export default New