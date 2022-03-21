import React from 'react'
import Header from './Header'

const Contacts = () => {
  return (
    <div>
      <div className='Contacts'>
        <Header/>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h1>Contact Us</h1>
        </div>
      </div>
      <section className='QuerySection'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <form>
          <div className='inputs'>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <input type='text' placeholder='Phone No.'/>
            <input type='text' placeholder='E-mail'/>
          </div>
          <textarea placeholder='Query'></textarea>
          <div>
            <button className='Button'>Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contacts