import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App