import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const LoginRegistration = () => {
  return (
    <div className='LoginRegistration'>
      <Header />
      <section>
        <div className='loginDiv'>
          <h3>Sign In</h3>
          <form action='/resident'>
            <small>Login if you have an account</small>
            <div className='input-div'>
              <input type='text' placeholder='E-mail' />
            </div>
            <div className='input-div'>
              <input type='password' placeholder='Password' />
            </div>
            <div>
              <button className='Button'>Sign In</button>
            </div>
            <p><Link to='#'>Forgot password?</Link></p>
          </form>
        </div>
        <div className='registrationDiv'>
          <h3>Register</h3>
          <form action='/admin'>
            <small>Register Here to create Profile </small>
            <div className='input-div'>
              <input type='text' placeholder='Name' />
            </div>
            <div className='input-div'>
              <input type='text' placeholder='Date Of Birth' />
            </div>
            <div className='input-div'>
              <input type='text' placeholder='Address' />
            </div>
            <div className='input-div'>
              <input type='text' placeholder='E-mail' />
            </div>
            <div className='input-div'>
              <input type='password' placeholder='Password' />
            </div>
            <div>
              <button className='Button'>Register</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default LoginRegistration