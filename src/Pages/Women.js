import React from 'react'
import { Heading1 } from './Category'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { arrivals } from '../Data/Cat';
import Button from '../Component/Button';
import Experts from '../Component/Experts'
import FreeMoney from '../Component/FreeMoney';
import { Trending1 } from '../Component/Trending';

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
function Women() {
    return (
        <>
            <Heading1 />
            <div className="container women">
                <div className="row">
                    <div className="col-lg-2">
                        <div className='cta'>
                            <h4 className='pt-5 pb-3 fs-6'>Ctaegories</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="firstCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="firstCheckboxStretched">Backpacks</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="secondCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="secondCheckboxStretched">Travel Bags</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="thirdCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="thirdCheckboxStretched">Laptop Sleeves</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="fourCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="fourCheckboxStretched">Organization</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="fifthCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="fifthCheckboxStretched">Accessories</label>
                                </li>
                            </ul>
                        </div>
                        <div className='color'>
                            <h4 className='pt-5 pb-3 fs-6'>Colors</h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="sixthCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="sixthCheckboxStretched">White</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="sevenCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="sevenCheckboxStretched">Beige</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="eightCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="eightCheckboxStretched">Blue</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="nineCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="nineCheckboxStretched">Black</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="thCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="thCheckboxStretched">Brown</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="tenCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="tenCheckboxStretched">Green</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="elevenCheckboxStretched" />
                                    <label className="form-check-label stretched-link" htmlFor="elevenCheckboxStretched">Navy</label>
                                </li>
                            </ul>
                        </div>
                        <div className="size">
                            <h4 className='fs-6'>Sizes</h4>
                            <ul>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="CheckboxStretchedOne" />
                                    <label className="form-check-label stretched-link" htmlFor="CheckboxStretchedOne">XS</label>
                                </li>
                                <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue id="CheckboxStretchedTwo" />
                                    <label className="form-check-label stretched-link" htmlFor="CheckboxStretchedTwo">S</label>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <label for="customRange1" class="form-label">Example range</label>
                            <input type="range" class="form-range" id="customRange1"></input>
                        </div>
                        <div>
                            <div class="form-check form-switch form-check-reverse">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                                <label class="form-check-label" for="flexSwitchCheckReverse"><h4 className='fs-6 text-start'>On sale!</h4>
                                    <p className='fs-6 text-start'>products currently on sale</p></label>
                            </div>
                            <div className='sort'>
                                <h4 className='fs-6'>sorts</h4>
                                <ul className='text-start p-0 m-0'>
                                    <li className='py-2'>
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                                        <label class="form-check-label" for="firstRadio">Most Popular</label>
                                    </li>
                                    <li className='py-2'>
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                                        <label class="form-check-label" for="firstRadio">Best Rating</label>
                                    </li>
                                    <li className='py-2'>
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                                        <label class="form-check-label" for="firstRadio">Newest</label>
                                    </li>
                                    <li className='py-2'>
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                                        <label class="form-check-label" for="firstRadio">Price Low-Hight</label>
                                    </li>
                                    <li className='py-2'>
                                        <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
                                        <label class="form-check-label" for="firstRadio">Price Hight-Low</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10">
                        <Trending2 />
                        
                    </div>
                </div>
            </div>
            <Experts />
            <FreeMoney />
        </>
    )
}

export default Women
export function Trending2() {
    return (
        <div className='container'>
   <div className="trending">
    <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
         {arrivals.slice(9, 12).map((item) => (
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
       <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
         {arrivals.slice(6, 9).map((item) => (
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
       </div>
   </div>
    )
}
