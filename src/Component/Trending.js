import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { arrivals } from '../Data/Cat';
import Button from './Button';
import { Link } from 'react-router-dom';
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
      items: 4
    }
  }
};
function Trending() {
  const [hide, setHide] = useState(false)
  const HideName = () => {
    if (hide == true) {
      setHide(false)
    }
    else {
      setHide(true)
    }
  }
  return (
    <>
      <section className="trending">
        <div className="container">
          <h2 className='pb-2 text-left fw-semibold fs-2'>What's trending now</h2>
          <p className='fs-5 text-secondary'>Discover the most trending products in Ciseco.</p>
          <div className='d-flex justify-content-between top'>
            <ul className='d-flex gap-5 p-0 menu'>
              <li><button className='filter1'>All Items</button></li>
              <li><button className='filter1'>Women</button></li>
              <li><button className='filter1'>Mans</button></li>
              <li><button className='filter1'>Kids</button></li>
              <li><button className='filter1'>Jewels</button></li>
            </ul>
            <button className='filter ' onClick={HideName}><i class="bi bi-funnel"></i>Filter</button>

            {hide && (
              <div className='d-flex justify-content-between item'>
                <ul className='d-flex gap-5 p-0'>
                  <li><button className='sort0'><i class="bi bi-coin pe-2"></i>100$-500$
                  </button></li>
                  <li>
                    <div class="dropdown">
                      <div class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-journal-text pe-2"></i>Categories
                      </div>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">All Categories</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">New Arrivals</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Sale</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Sale</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Backpacks</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Laptop Sleeves</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Organization</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Accessories</label>
                        </li>
                        <div className='d-flex justify-content-between'>
                          <button className='bg-light ms-3' >Clear</button>
                          <button className='bg-darks me-3'>Apply</button>

                        </div>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div class="dropdown">
                      <div class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-paint-bucket pe-2"></i>Colors
                      </div>
                      <ul class="dropdown-menu">
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">White</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Beige</label>
                        </li>

                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Blue</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Black</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Brown</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Brown</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Green</label>
                        </li>
                        <li class="dropdown-item list-group-item p-2">
                          <input class="form-check-input m-1" type="checkbox" value="" id="firstCheckbox" />
                          <label class="form-check-label" for="firstCheckbox">Navy</label>
                        </li>
                        <div className='d-flex justify-content-between'>
                          <button className='bg-light ms-3' >Clear</button>
                          <button className='bg-darks me-3'>Apply</button>

                        </div>
                      </ul>

                    </div>
                  </li>

                  <li>
                    <div class="dropdown">
                      <div class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-arrows-angle-expand pe-2"></i>Size
                      </div>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </li>

                  <li><button className='sort0'><i class="bi bi-emoji-smile-fill pe-2"></i>On sale</button></li>
                </ul>
                <button className='sort'><i class="bi bi-sort-down-alt"></i>Sort Order</button>
              </div>
            )}
          </div>
          <Trending1 />

        </div>
      </section>
    </>
  )
}

export default Trending

export function Trending1() {
  return (
    <div className='container'>
      <div className="trending">
        <Link to="/shoes">
          <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
            {arrivals.slice(9, 13).map((item) => (
              <div className="" key={item.category}>
                <div className='position-relative'>
                  <div className='d-flex position-absolute gap-3'>
                    <div className='btn'><i class="bi bi-bag-dash-fill pe-2"></i>Add to bag</div>
                    <div className='btn bg-light text-dark'><i class="bi bi-arrows-move pe-2"></i>Quick view</div>
                  </div>
                  <img src={item.image} alt="" className='p-img py-3' />
                </div>
                <div className="d-flex">
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv2.3188fafe.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv3.845c4d92.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv4.0613c448.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75' />
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

        <Link to="/shoes">
          <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
            {arrivals.slice(6, 10).map((item) => (
              <div className="" key={item.category}>
                <div className='position-relative'>
                  <div className='d-flex position-absolute gap-3'>
                    <div className='btn'><i class="bi bi-bag-dash-fill pe-2"></i>Add to bag</div>
                    <div className='btn bg-light text-dark'><i class="bi bi-arrows-move pe-2"></i>Quick view</div>
                  </div>
                  <img src={item.image} alt="" className='p-img py-3' />
                </div>
                <div className="d-flex">
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv2.3188fafe.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv3.845c4d92.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv4.0613c448.jpg&w=128&q=75' />
                  <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75' />
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
    </div>
  )
}
