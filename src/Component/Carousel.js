import React from 'react'


function Carousel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide  carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row">
                            <div className="col-lg-6 left">
                                <div className="carousel-caption d-md-block">
                                    <p>In this season, find the best 🔥</p>
                                    <h5>Exclusive collection for everyone</h5>
                                    <div className="btn">Explore Now<i class="bi bi-search ps-3"></i></div>
                                </div>
                            </div>
                            <div className="col-lg-6 right">
                                <img src={require('../Assets/IMG/hero-right-3.webp')} className="d-block w-100 h-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row">
                            <div className="col-lg-6 left">
                            <div className="carousel-caption d-md-block">
                            <p>In this season, find the best 🔥</p>
                            <h5>Exclusive collection for everyone</h5>
                            <div className="btn">Explore Now<i class="bi bi-search ps-3"></i></div>
                        </div>
                            </div>
                            <div className="col-lg-6 right">
                            <img src={require('../Assets/IMG/hero-right-2.webp')} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="row">
                            <div className="col-lg-6 left">
                            <div className="carousel-caption d-md-block">
                            <p>In this season, find the best 🔥</p>
                            <h5>Exclusive collection for everyone</h5>
                            <div className="btn">Explore Now<i class="bi bi-search ps-3"></i></div>
                        </div>
                            </div>
                            <div className="col-lg-6 right">
                            <img src={require('../Assets/IMG/hero-right-3.webp')} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Carousel
