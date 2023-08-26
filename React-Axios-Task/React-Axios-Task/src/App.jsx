import { useState } from 'react'

import './App.css'
import Navbar from './Componetns/Navbar'
import Content from './Componetns/Content'

function App() {
 

  return (
    <>
    <div>
      <header className='header'>
        <Navbar></Navbar>
      </header>
      <div className='content container '>
        
        <Content></Content>
      </div>



    </div>
      
    </>
  )
}

export default App
