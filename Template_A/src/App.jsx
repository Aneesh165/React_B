import React from 'react'
import './App.css'
import Product from './Components/Product'
import Navbarss from './Components/Navbar'

function App() {
  return (
    <div className='main'>
      <Navbarss/>
      <h1 style={{textAlign:'center'}}>PRODUCTS</h1>
      <Product/>
    </div>
  )
}

export default App