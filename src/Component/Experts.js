import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import discover from '../Data/Cat';

const options = {

    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  };
function Experts() {
  return (
    <>
    <div className="container experts">
    <h3 className='fs-2 fw-semibold'>Chosen by our experts</h3>
        <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
            {discover.slice(4, 7).map((item) => (
              <div className="text-center bg-primary-subtle" key={item.category}>
                <div>
                  <img src={item.image} alt="" className='py-3 w-100' />
                  </div>
                <div className="row">
                    <div className="col-lg-4">
                    <img src={item.image1} alt="" />
                    </div>
                    <div className="col-lg-4"><img src={item.image2} alt="" /></div>
                    <div className="col-lg-4"><img src={item.image3} alt="" /></div>
                    </div>
                    <div className='d-flex justify-content-between pt-2 mx-4'>
                        <h5 className='fw-semibold'>{item.title1}</h5>
                        <div className='border border-success text-success'><i class="bi bi-currency-dollar"></i>{item.price}</div>
                         
                    </div> 

                <div className="d-flex justify-content-between pt-4 mx-4">
                  <p className='fs-6 p-0 m-0'>{item.color}</p>
                  <div className='fs-6 p-0 m-0'><i class="bi bi-star-fill me-2 text-warning"></i>{item.rating.rate}({item.rating.count} Review)</div>
                </div>
              </div>
            ))}


          </OwlCarousel>
          </div>
    </>
  )
}

export default Experts
