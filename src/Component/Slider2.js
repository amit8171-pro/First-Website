import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { arrivals } from '../Data/Cat';
import { Link } from 'react-router-dom';
import '../style/slider.scss';
import Button from './Button';
const options = {
   
        loop: true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    
};
function Slider2() {
  return (
    <>
      <section className="border-bottom">
        <div className="container">
          <h2 className='py-5 text-left fw-semibold fs-2'>Discover more. <span className='fs-2 text-secondary'>Good things are waiting for you</span></h2>
      <Link to="/shoes"> <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
        {arrivals.slice(0,5).map((item)=>(
                <div className="" key={item.id}>
                  <div className='position-relative'> 
                  <div className='d-flex position-absolute gap-3'>
                    <div className='btn'><i class="bi bi-bag-dash-fill pe-2"></i>Add to bag</div>
                    <div className='btn bg-light text-dark'><i class="bi bi-arrows-move pe-2"></i>Quick view</div>
                  </div>
                    <img src={item.image} alt="" className='p-img py-3'/> 
                  </div>
                   <div className="d-flex">
                    <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75'/>
                    <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv2.3188fafe.jpg&w=128&q=75'/>
                    <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv3.845c4d92.jpg&w=128&q=75'/>
                    <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv4.0613c448.jpg&w=128&q=75'/>
                    <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75'/>
                   </div>
                   <h4 className='text-left'>{item.title}</h4>
                   <p className='text-left text-secondary'>{item.title1}</p> 
              
                <div className="d-flex align-items-center">
                  <div className='border border-success text-success'>{item.price}</div>
                  <div className='fs-6 text-secondary'><i class="bi bi-star-fill me-2 text-warning"></i>{item.rating.rate}({item.rating.count} Review)</div>
                </div>
                </div>
            ))}
           
           
        </OwlCarousel>
        </Link>
        </div>
      </section>
    </>
  )
}

export default Slider2
