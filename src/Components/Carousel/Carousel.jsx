import React from 'react'
import "./Carousel.css"
import img1 from "../../Assets/img/nuevas/carouselN2.png"
import img2 from "../../Assets/img/nuevas/carouselN3-2.png"
import img3 from "../../Assets/img/nuevas/carouselN1.png"


const Carousel = () => {
  return (
    <>
    {/* <!-- Start Banner Hero --> */}
    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={img1} alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1 className="h1 text-warning kase"><b>Käse</b> tienda de quesos</h1>
                                <h3 className="h2">Somos productores y curadores de quesos argentinos e importados.</h3>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat animi tempore provident soluta aperiam similique minima assumenda voluptatem facilis repellat blanditiis, iste architecto dolor sint voluptates perferendis, consequatur corporis!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={img2} alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Proident occaecat</h1>
                                <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam labore consectetur autem, fugiat quam quibusdam. Quibusdam deserunt esse suscipit optio temporibus amet. Provident modi ullam facilis error excepturi molestiae?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={img3} alt=""/>
                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1 className="h1">Repr in voluptate</h1>
                                <h3 className="h2">Ullamco laboris nisi ut </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque aperiam assumenda reprehenderit laboriosam reiciendis officiis? Voluptatem vero eveniet consequatur totam aspernatur at consectetur eum ad, quas nobis assumenda aut?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
            <i className="fas fa-chevron-left"></i>
        </a>
        <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
        </a>
    </div>
    {/* <!-- End Banner Hero --> */}

    
    
    </>
  )
}

export default Carousel