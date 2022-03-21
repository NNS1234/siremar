import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <section>
        <p>This is Siremar</p>
        <h1>A portal for residents of Margarita</h1>
        <button className='Button'>Get Started</button>
        </section>
    </div>
  )
}

export default Home