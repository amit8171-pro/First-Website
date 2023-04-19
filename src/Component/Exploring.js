import React from 'react'
import '../style/explor.scss';

function Exploring() {
  return (
    <>

  <div className="container explo">
    <h2 className='text-center fs-1 pb-5'>Start exploring.</h2>
    <div className="nav">
    <ul class="list-inline mx-auto mx-4">
  <li class="list-inline-item active"><i class="bi bi-gender-female pe-2"></i>Women</li>
  <li class="list-inline-item"><i class="bi bi-gender-male pe-2"></i>Men</li>
  <li class="list-inline-item"><i class="bi bi-person-square pe-2"></i>Kids</li>
  <li class="list-inline-item"><i class="bi bi-controller pe-2"></i>Sports</li>
  <li class="list-inline-item"><i class="bi bi-activity pe-2"></i>Beauty</li>
  <li class="list-inline-item"><i class="bi bi-moon-stars-fill pe-2"></i>Jewelry</li>
</ul>
    </div>
    <section>
        <div className="row">
            <div className="col-lg-4 hov">
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore1.d39b5c53.png&w=96&q=75" alt="" />
                    <span className='fs-6'>155 Products</span>
                </div>
                <div className='d-flex position-relative'>
                    <div>
                        <p>Manufacturar</p>
                        <h4>Backpack</h4>
                        <div className="btn">See Collection<i class="bi bi-arrow-right ps-2 p-0 m-0"></i></div>
                    </div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/explore1.bafb60cf.svg" alt="" className='position-absolute bottom-0 end-0 w-75'/>
                </div>
            </div>
            <div className="col-lg-4 hov">
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore2.06610d8a.png&w=96&q=75" alt="" />
                    <span className='fs-6'>22 Products</span>
                </div>
                <div className='d-flex position-relative'>
                    <div>
                        <p>Manufacturar</p>
                        <h4>Shoes</h4>
                        <div className="btn">See Collection<i class="bi bi-arrow-right ps-2 p-0 m-0"></i></div>
                    </div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/explore2.46138c9a.svg" alt="" className='position-absolute bottom-0 end-0 w-75'/>
                </div>
            </div>
            <div className="col-lg-4 hov">
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore3.cfb58062.png&w=96&q=75" alt="" />
                    <span className='fs-6'>144 Products</span>
                </div>
                <div className='d-flex position-relative'>
                    <div>
                        <p>Manufacturar</p>
                        <h4>Recycled Blanket</h4>
                        <div className="btn">See Collection<i class="bi bi-arrow-right ps-2 p-0 m-0"></i></div>
                    </div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/explore3.8526de42.svg" alt="" className='position-absolute bottom-0 end-0 w-75'/>
                </div>
            </div>
            <div className="col-lg-4 hov">
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore9.1f619e2a.png&w=96&q=75" alt="" />
                    <span className='fs-6'>343 Products</span>
                </div>
                <div className='d-flex position-relative'>
                    <div>
                        <p>Manufacturar</p>
                        <h4>Cycling Shorts</h4>
                        <div className="btn">See Collection<i class="bi bi-arrow-right ps-2 p-0 m-0"></i></div>
                    </div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/explore9.0d4aa2f6.svg" alt="" className='position-absolute bottom-0 end-0 w-75'/>
                </div>
            </div>
            <div className="col-lg-4 hov">
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore5.2af4f787.png&w=96&q=75" alt="" />
                    <span className='fs-6'>222 Products</span>
                </div>
                <div className='d-flex position-relative'>
                    <div>
                        <p>Manufacturar</p>
                        <h4>Cycling Jersey</h4>
                        <div className="btn">See Collection<i class="bi bi-arrow-right ps-2 p-0 m-0"></i></div>
                    </div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/explore5.4a34ab29.svg" alt="" className='position-absolute bottom-0 end-0 w-75'/>
                </div>
            </div>
            <div className="col-lg-4 hov">
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexplore6.ab5c1b32.png&w=96&q=75" alt="" />
                    <span className='fs-6'>155 Products</span>
                </div>
                <div className='d-flex position-relative'>
                    <div>
                        <p>Manufacturar</p>
                        <h4>Car Coat</h4>
                        <div className="btn">See Collection<i class="bi bi-arrow-right ps-2 p-0 m-0"></i></div>
                    </div>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/explore6.9182f851.svg" alt="" className='position-absolute bottom-0 end-0 w-75'/>
                </div>
            </div>
        </div>
    </section>
  </div>
    </>
  )
}

export default Exploring
