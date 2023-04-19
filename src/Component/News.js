import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/testimonials.scss';
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
            items:1
        }
    }

};

function News() {
  return (
    <>
    <div className="container text-center"> 
    <div className='heading'>
    <h3 className='fs-2 fw-semibold'>Good news from far away 🥇</h3>
    <p className='fs-5'>Let's see what people think of Ciseco</p>
    </div>
     <section class="testimonials position-relative">
      <div>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSayMain.f8577237.png&w=128&q=75" alt=""  className='position-absolute img1'/>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay1.67c24f9c.png&w=128&q=75" alt="" className='position-absolute img2'/>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay6.c3c3a42b.png&w=128&q=75" alt="" className='position-absolute img3'/>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay3.0e09af75.png&w=128&q=75" alt="" className='position-absolute img4'/>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay4.d7452ab6.png&w=128&q=75" alt="" className='position-absolute img5'/>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay2.2f9a7346.png&w=128&q=75" alt="" className='position-absolute img6'/>
        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FclientSay5.dc081a7c.png&w=128&q=75" alt="" className='position-absolute img7'/>
      </div>

     <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
          <div className='first '>
            <h6 className='fs-4 pb-3 fst-normal'>Great quality products, affordable prices, fast and friendly delivery. I very recommend.</h6>
            <h4 className='py-3'>Berta Emili</h4>
            <div className='pb-3 text-warning d-flex gap-2 justify-content-center fs-4'>
            <i class="bi bi-star-fill "></i><i class="bi bi-star-fill "></i><i class="bi bi-star-fill "></i><i class="bi bi-star-fill "></i><i class="bi bi-star-fill "></i>
            </div>
          </div>
          <div className='first'>
            <h6 className='fs-4 pb-3 fst-normal'>Great quality products, affordable prices, fast and friendly delivery. I very recommend.</h6>
            <h4 className='py-3'>Tiana Abie</h4>
            <div className='pb-3 text-warning d-flex gap-2 justify-content-center fs-4'>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
          </div>
          <div className='first'>
            <h6 className='fs-4 pb-3 fst-normal'>Great quality products, affordable prices, fast and friendly delivery. I very recommend.</h6>
            <h4 className='py-3'>Lennie Swiffan</h4>
            <div className='pb-3 text-warning d-flex gap-2 justify-content-center fs-4'>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            
          </div>

    </OwlCarousel>
    </section></div>
  
    </>
  )
}

export default News
