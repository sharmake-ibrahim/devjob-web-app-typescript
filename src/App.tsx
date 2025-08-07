// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Details from './Details'

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
           <Route path='/:id' element={<Details/>} />
          <Route path='*' element={<div> <h1>........404........</h1></div>}/>
         
        </Routes>
      </BrowserRouter>
  )
}

export default App
