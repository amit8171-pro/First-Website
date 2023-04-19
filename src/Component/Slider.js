import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import discover from '../Data/Cat';
import { Link } from 'react-router-dom';
import '../style/slider.scss';
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
                items:3
            }
        }
    
};
function Slider() {
  return (
    <>
      <section className="py-5 border-top">
        <div className="container">
          <h2 className='py-5 text-left fw-semibold fs-2'>Discover more. <span className='fs-2 text-secondary'> Good things are waiting for you</span></h2>
        <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
        {discover.map((item)=>(
                <div className=" " key={item.id}>
                 <div className="row my-5">
              <div className="col-lg-7 p-0 m-0">
              <p className='text-left text-secondary ms-4'>{item.title1}</p> 
              <h4 className='text-left fs-4 ms-4'>{item.title}</h4> 
              <div className="btn ms-4"><Link to="/category">Show me all</Link></div>
              </div>
              <div className="col-lg-5">
              <img src={item.image} alt="" className='p-img'/>
              </div>
            </div>
                </div>
            ))}
           
           
        </OwlCarousel>
        </div>
      </section>
    </>
  )
}

export default Slider
