import React from 'react'
import Header from './Header'

const Services = () => {
  return (
    <div>
      <div className='Contacts'>
        <Header/>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h1>Services</h1>
        </div>
      </div>
      <section className='ServiceGrid'>
      <div>
         <div className='PlaceHolder'></div>
         <div className='description'>
           <h4>Create your resident account</h4>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
       </div><div>
         <div className='PlaceHolder'></div>
         <div className='description'>
           <h4>Get discounts for various things like shops and travels</h4>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
       </div><div>
         <div className='PlaceHolder'></div>
         <div className='description'>
           <h4>Get info about school admission and more...</h4>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
       </div>
      </section>
    </div>
  )
}

export default Services