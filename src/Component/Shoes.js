import React from 'react'
import '../style/shoes.scss';
import Button from './Button';
import { useState } from 'react';
function Shoes() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 100) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <>
            <div className="container shoes">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail1.38019683.jpg&w=640&q=75" alt="" className='w-100' />
                        <div className='d-flex justify-content-between'>
                            <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail2.e6384a9e.jpg&w=640&q=75" alt="" className='img1' />
                            <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdetail3.e0a5aca4.jpg&w=640&q=75" alt="" className='img1' />
                        </div>
                    </div>

                    <div className="col-lg-6 p-0">
                        <h3 className='m-0 fw-bold fs-2'>Heavy Weight Shoes</h3>
                        <div className="d-flex my-4">
                            <div className='border border-success text-success p-0 me-5'>$112</div>
                            <div className='fs-6 text-secondary d-flex gap-3 '><p className='me-4'><i class="bi bi-star-fill me-2 text-warning "></i> 4.9</p><a href="" className='text-secondary me-5'>142 reviews</a></div>
                            <p className='m-0'>New In</p>
                        </div>
                        <div className="d-flex">
                            <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75' />
                            <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv2.3188fafe.jpg&w=128&q=75' />
                            <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv3.845c4d92.jpg&w=128&q=75' />
                            <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv4.0613c448.jpg&w=128&q=75' />
                            <Button img='https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv6.8375417b.jpg&w=128&q=75' />
                        </div>
                        <div className='d-flex justify-content-start my-4'>
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                            </div>
                            <input type="text" class="form-control mx-3 px-3" value={num} onChange={handleChange} />
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                            </div>
                            <div className="btn bg-primary px-5 ms-3">Add to cart</div>
                        </div>
                        <div className='my-5  mx-5'>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header p-0">
                                        <button class="accordion-button p-0 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Description
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body p-0 m-0">
                                            <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header p-0">
                                        <button class="accordion-button collapsed p-0 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Fabric + Care
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body p-0 m-0">
                                            <p>Made from a sheer Belgian power micromesh.
                                                74% Polyamide (Nylon) 26% Elastane (Spandex)
                                                Adjustable hook & eye closure and straps
                                                Hand wash in cold water, dry flat</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header p-0">
                                        <button class="accordion-button collapsed p-0 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How it Fits
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body p-0 m-0">
                                            <p>Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5  mx-5">
                
                                <div class="row row-cols-2 gy-5">
                                    <div class="col">
                                        <h5 className='fs-5 fw-bold'>Free shipping</h5>
                                        <p>On orders over $50.00</p>
                                    </div>
                                    <div class="col">
                                        <h5 className='fs-5 fw-bold'>Very easy to return</h5>
                                        <p>Just phone number.</p>
                                    </div>
                                    <div class="col">
                                        <h5 className='fs-5 fw-bold'>Nationwide Delivery</h5>
                                        <p>Fast delivery nationwide.</p>
                                    </div>
                                    <div class="col">
                                        <h5 className='fs-5 fw-bold'>Refunds policy</h5>
                                        <p>60 days return for any reason</p>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="my-5 mx-5">
                            <h3>Product Details</h3>
                            <p>The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction.</p>
                            <p>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                            <ol>
                          <li>Regular fit, mid-weight t-shirt</li>  
                          <li>Natural color, 100% premium combed organic cotton</li>  
                          <li>Quality cotton grown without the use of herbicides or pesticides - GOTS certified</li>  
                          <li>Soft touch water based printed in the USA</li>  
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shoes
