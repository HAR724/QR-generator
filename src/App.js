import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import Nav from './Nav'

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
