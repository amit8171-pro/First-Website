import React from 'react'

function Shop() {
  return (
    <div>
      <div className="container">
        <h3 className='fs-2 fw-semibold'>Shop by department</h3>
        <div className="row text-center shop">
            <div className="col-lg-3 travel">
                <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment1.43e0954c.png&w=640&q=75" alt="" className='w-100'/>
                <h5 className='pt-4'>Travel Kits</h5>
                <p>20+ categories</p>
            </div>
            <div className="col-lg-3 beauty">
                <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment2.b25c00b6.png&w=640&q=75" alt="" className='w-100'/>
                <h5 className='pt-4'>Beauty Products</h5>
                <p>10+ categories</p>
            </div>
            <div className="col-lg-3 sport">
                <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment3.27cf17aa.png&w=640&q=75" alt="" className='w-100'/>
                <h5 className='pt-4'>Sport Kits</h5>
                <p>34+ categories</p>
            </div>
            <div className="col-lg-3 pets">
                <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment4.2fbde18f.png&w=640&q=75" alt="" className='w-100' />
                <h5 className='pt-4'>Pets Food</h5>
                <p>12+ categories</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
