import React from 'react'
import { Link } from 'react-router-dom'
import '../style/freeMoney.scss';

function FreeMoney() {
    return (
        <section>
            <div className="container FreeMoney">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" className='w-25' />
                        <h2>Earn free money with Ciseco</h2>
                        <p>With Ciseco you will get freeship & saving combo...</p>
                        <div className="d-flex gap-5">
                            <div className="btn1"><Link to="">Saving combo</Link></div>
                            <div className="btn2 bg-light"><Link to="">Discover more</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={require('../Assets/IMG/rightLargeImg.webp')} alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeMoney

export function Kids() {
    return (
        <>
            <div className="container">
                <div className="row kids">
                    <div className="col-lg-6">
                        <img src={require('../Assets/IMG/promo2.webp')} alt="" className='w-100' />
                    </div>
                    <div className="col-lg-6 mt-5">
                        <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" className='w-25' />
                        <h2>Special offer
                            in kids products</h2>
                        <p className='mb-5'>Fashion is a form of self-expression and autonomy at a particular period and place.</p>
                        <div className="d-flex gap-5">
                            <div className="btn1"><Link to="">Discover more</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SpecialOffers() {
    return (
        <section className='offers'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" className='w-25' />
                        <h2>Don't miss out on special offers</h2>
                        <p>Register to receive news about the latest, savings combos, discount codes...</p>
                        <ul>
                            <li><span className='fs-6 pe-4 text-primary'>01</span> <span className='fs-5'>Saving Combos</span> </li>
                            <li><span className='fs-6 pe-4 text-info'>02</span> <span className='fs-5'>Freeship</span> </li>
                            <li><span className='fs-6 pe-4 text-danger'>03</span> <span className='fs-5'>Premium magazines</span> </li>
                        </ul>
                        <form>
                            <div class="mb-3">

                                <input type="email" class="form-control fs-6" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' />
                                <button type="submit" class="btn btn-primary mt-2">Submit</button>

                            </div>
                        </form>

                    </div>
                    <div className="col-lg-6">
                        <img src={require('../Assets/IMG/promo3.webp')} alt="" className='w-100' />
                    </div>
                </div>
            </div>
        </section>
    )
}
