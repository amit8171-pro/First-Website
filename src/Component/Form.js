import React from 'react'
import { useState } from 'react';
import '../style/form.scss';
import  Trending2  from '../Pages/Women';
function Form() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  return (
    <>
      <div className="container form">
        <h4>Account</h4>
        <p>Enrico Cole, ciseco@gmail.com. Los Angeles, CA</p>
        <ul class="list-inline">
          <li class="list-inline-item active" onClick={() => updateToggle(1)}>Account info</li>
          <li class="list-inline-item" onClick={() => updateToggle(2)}>Save lists</li>
          <li class="list-inline-item" onClick={() => updateToggle(3)}>My order</li>
          <li class="list-inline-item" onClick={() => updateToggle(4)}>Change password</li>
          <li class="list-inline-item" onClick={() => updateToggle(5)}>Change Billing</li>
        </ul>
        <div className={toggle === 1 ? "show-row" : "row"}>
          <div className="col-lg-12">
            <h4 className='fs-2 fw-semibold pb-5 text-start p-0 m-0'>Account information</h4>
            <div className='ps-5 position-relative'>
              <div className='position-absolute top-0 start-0'><img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-3.0c3c10f4.png&w=128&q=75" alt="" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className='mb-3'>Date OF Birth</label><br />
                <input type="date" name="date" />
              </div>

              <div className="mb-3">
                <label className='mb-3'>Address</label><br />
                <input type="text" name="holder" placeholder="Enter your Address"></input>
              </div>

              <div className="mb-3">
                <label className='mb-3'>Gender</label><br />
                <select name="gender">
                  <option value="boy">male</option>
                  <option value="girl">female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Phone number</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">About you</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
              </div>
              <button className="btn btn-primary">Update account</button>
            </div>
          </div>

        </div>
        <div className={toggle === 2 ? "show-row" : "row"}>
          <div className="col-lg-12">
          
          </div>
        </div>
        <div className={toggle === 3 ? "show-row" : "row"}>
         
        </div>
        <div className={toggle === 4 ? "show-row" : "row"}>
          <h4 className='fs-2 fw-bold mb-5'>Update your password</h4>
          <div className='pb-3'>
            <label for="inputPassword5" class="form-label">Current Password</label>
            <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"></input>
          </div>
          <div className='pb-3'>
            <label for="inputPassword5" class="form-label">New Password</label>
            <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"></input>
          </div>
          <div className='pb-3'>
            <label for="inputPassword5" class="form-label">Confirm Password</label>
            <input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"></input>
          </div>
          <button className='text-light'>Update password</button>

        </div>
        <div className={toggle === 5 ? "show-row" : "row"}>
          <h4 className='fs-2 fw-bold mb-5'>Payments & payouts</h4>
          <div className='me-5 mb-5'>
            <p className='mb-5'>When you receive a payment for a order, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.</p>
            <p>
              To get paid, you need to set up a payout method releases payouts about 24 hours after a guest’s scheduled time. The time it takes for the funds to appear in your account depends on your payout method. <span><a href="" className='fs-6'>Learn more</a></span></p>
          </div>
          <button className='text-light'>Add payout mothod</button>
        </div>

      </div>
    </>
  )
}

export default Form
