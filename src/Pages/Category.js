import React from 'react'
import Trending, { Trending1 } from '../Component/Trending';
import '../style/cat.scss';
import Experts from '../Component/Experts';
import FreeMoney from '../Component/FreeMoney';
function Category() {
  return (
    <>
      <Heading1 />
      <Shorts />
      <Trending1 />
      <Experts />
      <FreeMoney />
    </>
  )
}

export default Category

export function Heading1() {
  return (
    <div className='container heading1'>
      <h3>Man collection</h3>
      <p>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
    </div>
  )
}
function Shorts() {
  return (
    <>
      <div className="container shorts">
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

          <div class="dropdown">
            <div class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-sort-down-alt"></i>Sort Order
            </div>
            <ul class="dropdown-menu">
              <li className='py-4 ps-3'>
                <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                <label class="form-check-label" for="firstRadio">Most Popular</label>
              </li>
              <li className='py-4 ps-3'><input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" />
                <label class="form-check-label" for="secondRadio">Best Rating</label></li>
              <li className='py-4 ps-3'><input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio" />
                <label class="form-check-label" for="secondRadio">Newest</label></li>

                <div className='d-flex justify-content-between'>
                    <button className='bg-light ms-3' >Clear</button>
                    <button className='bg-darks me-3'>Apply</button>

                  </div>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}
