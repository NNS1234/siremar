import React from 'react'
import Header from './Header'
const Inspector = () => {
  return (
    <div>
      <div className='Contacts' >
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Manage Registration</h1>
        </div>
      </div>
      <section className='ServiceGrid '>
        <div>
          <div className='description'>
            <h4>Manage Resident</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input type='text' placeholder='Resident Id' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Name' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Email id' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Address' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='DOB' className='form-control' />
              </div>
              <select className='input-div'>
                <option>Gender</option>
              </select>
              <div>
                <textarea className='form-control'></textarea>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className='description'>
            <h4>Manage Moveouts</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input type='text' placeholder='ID' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Name' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Address' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Moving Date' className='form-control' />
              </div>


            </form>
          </div>
        </div>


        <div>
          <div className='description'>
            <h4>Register Business</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input type='text' placeholder='New Business' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Company' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Date' className='form-control' />
              </div>
              <div>
                <textarea placeholder='COMMENTS' className='form-control'></textarea>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className='description'>
            <h4>Manage resident Schools</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input type='text' placeholder='Resident ID' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='School' className='form-control' />
              </div>
              <select className='input-div'>
                <option>Gender</option>
              </select>
              <div className='input-div'>
                <input type='text' placeholder='Admission Date' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Address' className='form-control' />
              </div>

            </form>
          </div>
        </div>
      </section>
      <div class="chat-popup" id="myForm">
        <form action="/action_page.php" class="form-container">
          <h1>Chat With Resident</h1>

          <label for="msg"><b>Message</b></label>
          <textarea placeholder="Type message.." name="msg" required></textarea>

          <button type="submit" class="btn">Send</button>
          <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </form>
      </div>
    </div >
  )
}

export default Inspector