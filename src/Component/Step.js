import React from 'react'
import '../style/step.scss'

function Step() {
  return (
    <div className='step my-5'>
     <div className="container">
        <div className="row">
            <div className="col-lg-3 text-center">
             <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW1img.5d05ab6a.png&w=256&q=75" alt=""  className='w-50'/>
             <p className='text-danger'>Step 1</p>
             <h4 className='fs-6 py-3'>Filter & Discover</h4>
             <p>Smart filtering and suggestions make it easy to finds</p>
            </div>
            <div className="col-lg-3 text-center">
             <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2img.4553ec6b.png&w=256&q=75" alt=""  className='w-50'/>
             <p className='text-primary'>Step 2</p>
             <h4 className='fs-6 py-3'>Add to bag</h4>
             <p>Easily select the correct items and add them to the cart</p>
            </div>
            <div className="col-lg-3 text-center">
             <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW3img.63a41796.png&w=256&q=75" alt=""  className='w-50'/>
             <p className='text-warning-emphasis'>Step 3</p>
             <h4 className='fs-6 py-3'>Fast shipping</h4>
             <p>The carrier will confirm and ship quickly to you</p>
            </div>
            <div className="col-lg-3 text-center">
             <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW4img.10d25987.png&w=256&q=75" alt=""  className='w-50'/>
             <p className='text-success-emphasis'>Step 4</p>
             <h4 className='fs-6 py-3'>Enjoy the product</h4>
             <p>Have fun and enjoy your 5-star quality products</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Step


 
