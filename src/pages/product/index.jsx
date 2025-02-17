import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const products = ()=>{
    return (
        <div>

<section className="container-fluid">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<ul className="breadcrumbs">
					<li><Link to="/">Home</Link> <i className="fas fa-chevron-right"></i></li>
					<li>Laptop</li>
					
				</ul>
			</div>
		</div>
	</div>
</section>



<section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
            
            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src='https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)' alt="..." />
                    
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Fancy Product</h5>
                            Rs40000 - Rs80000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/products/details">View options</Link></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/494422233/oppo-k12x-5g-128-gb-6-gb-ram-midnight-navy-mobile-phone-digital-o494422233-p609630871-0-202407311923.jpeg?im=Resize=(360,360)" alt="..." />
                    
                    <div className="card-body p-4">
                        <div className="text-center">
                             
                            <h5 className="fw-bolder">Special Item</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            <span className="text-muted text-decoration-line-through">Rs2000</span>
                            Rs18000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">Add to cart</a></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/494404332/fabiano-jupiter-3-star-bee-rated-ceiling-fan-brown-1200-mm-pack-of-2-digital-o494404332-p608651523-0-202404011836.jpeg?im=Resize=(360,360)" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Sale Item</h5>
                            <span className="text-muted text-decoration-line-through">Rs5000</span>
                            Rs25000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">Add to cart</a></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/491641727/inalsa-joy-4-in-1-mini-chopper-with-high-quality-stainless-steel-chopper-blade-white-and-purple-digital-o491641727-p590950116-0-202112171740.jpeg?im=Resize=(360,360)" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Popular Item</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            Rs2000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">Add to cart</a></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/494338867/philips-xl-digitally-connected-air-fryer-black-hd925590-digital-o494338867-p607853165-0-202402101416.jpeg?im=Resize=(360,360)" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Sale Item</h5>
                            <span className="text-muted text-decoration-line-through">Rs1000</span>
                            Rs2000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">Add to cart</a></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/492864863/mycrofine-desire-plus-ss-flour-mill-bubbles-digital-o492864863-p594105921-0-202209262110.jpeg?im=Resize=(360,360)" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Fancy Product</h5>
                            Rs2000 - Rs8000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">View options</a></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/492572875/philips-essential-spectre-hd9200-airfryer-with-healthy-frying-with-rapid-air-technology-black-digital-o492572875-p593828684-0-202209162302.jpeg?im=Resize=(360,360)" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Special Item</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            <span className="text-muted text-decoration-line-through">Rs2000</span>
                            Rs18.00
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">Add to cart</a></div>
                    </div>
                </div>
            </div>

            <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://www.jiomart.com/images/product/original/491213724/usha-si-techne-garment-steamer-purple-white-detachable-water-tank-suitable-for-all-types-of-fabric-digital-o491213724-p590441156-0-202108121752.jpeg?im=Resize=(360,360)" alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">Popular Item</h5>
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            Rs40000
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="inner-products.html">Add to cart</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


        </div>
    )
}


export default products;