import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const[value, setValue] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })

const formSubmit = () => {

}

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us </h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                 name="fullname"
                 value={value.fullname}
                 onChange={InputEvent}  placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                 name="phone"
                 value={value.phone}
                 onChange={InputEvent}  placeholder="Enter your mobile no." />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                 name="email"
                 value={value.email}
                 onChange={InputEvent}  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Query</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                name="msg"
                value={value.msg}
                onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
            </form>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Contact
