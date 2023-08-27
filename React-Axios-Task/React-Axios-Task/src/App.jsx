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
      <footer className='bg-secondary d-flex justify-content-center'>
        <h5>©2023 CreatedBy Sathish</h5>
      </footer>




    </div>
      
    </>
  )
}

export default App
