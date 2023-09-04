import React from 'react'
import './Projetos.css'
import Cards from './Cards'



export default function Projetos() {
  return (
    <div>
        <div className='header-container-projeto'>
    
            <nav>
                <a href='/'>Home</a>
            </nav>
        </div>
        <div className='main-projeto'>
          <Cards/>
        </div>
    </div>
  )
}
