import React, { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Dynamicat from "../../componets/DynamicCat";

const ProductDetails = ()=>{
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
                <section className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="breadcrumbs">
                                    <li><Link to="/">Home</Link> <i className="fas fa-chevron-right"></i></li>
                                    <li><Link to="/products">Laptop</Link> <i className="fas fa-chevron-right"></i></li>
                                    <li>Product Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="product_info">
                            <Slider {...settings}>
                                <div className="item">
                                    <img className="img-fluid" src="https://www.jiomart.com/images/product/original/493692328/philips-handheld-garment-steamer-sth3000-20-digital-o493692328-p600274725-0-202304071920.jpeg?im=Resize=(420,420)" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid" src="https://www.jiomart.com/images/product/original/493692328/philips-handheld-garment-steamer-sth3000-20-digital-o493692328-p600274725-1-202304071920.jpeg?im=Resize=(420,420)" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid" src="https://www.jiomart.com/images/product/original/493692328/philips-handheld-garment-steamer-sth3000-20-digital-o493692328-p600274725-2-202304071920.jpeg?im=Resize=(420,420)" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid" src="https://www.jiomart.com/images/product/original/493692328/philips-handheld-garment-steamer-sth3000-20-digital-o493692328-p600274725-3-202304071920.jpeg?im=Resize=(420,420)" alt="" />
                                </div>
                                <div className="item">
                                    <img className="img-fluid" src="https://www.jiomart.com/images/product/original/493692328/philips-handheld-garment-steamer-sth3000-20-digital-o493692328-p600274725-4-202304071920.jpeg?im=Resize=(420,420)" alt="" />
                                </div>
                            </Slider>
                            </div>
                            </div>

                            <div className="col-md-7">
				

            <h3 className="mb-2">Premium Wireless Headphones</h3>
            <p className="text-muted mb-4">SKU: WH1000XM4</p>
            <div className="mb-2">
                <span className="h4 me-2">Rs349.99</span>
                <span className="text-muted"><s>Rs399.99</s></span>
            </div>
            <div className="mb-3">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <span className="ms-2">4.5 (120 reviews)</span>
            </div>
            <p className="mb-4">Experience premium sound quality and industry-leading noise cancellation with these wireless
                headphones. Perfect for music lovers and frequent travelers.</p>
            <div className="mb-4">
                <h5>Color:</h5>
                <div className="btn-group">
                    <input type="radio" className="btn-check" name="color"   />
                    <label className="btn btn-outline-dark" >Black</label>
                    <input type="radio" className="btn-check"    />
                    <label className="btn btn-outline-secondary" >Silver</label>
                    <input type="radio" className="btn-check" name="color"   />
                    <label className="btn btn-outline-primary" >Blue</label>
                </div>
            </div>
            <div className="mb-4">
                <label  className="form-label">Quantity:</label>
                <input type="number" className="form-control"  value="1" min="1"  style={{width:"80px"}}/>
            </div>
            <button className="btn btn-primary btn-lg mb-3 me-2">
                    <i className="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
            <button className="btn btn-outline-secondary btn-lg mb-3">
                    <i className="fa-solid fa-heart"></i> Add to Wishlist
                </button>
            <div className="mt-4">
                <h5>Key Features:</h5>
                <ul style={{listStyleType:"disc"}}>
                    <li>Industry-leading noise cancellation</li>
                    <li>30-hour battery life</li>
                    <li>Touch sensor controls</li>
                    <li>Speak-to-chat technology</li>
                </ul>
            </div>
        




			</div>

                        </div>
                    </div>
                </section>


                <section class="container-fluid pb-5">
	<div class="container">
		<div class="free_bg">
			<div class="row">
				<div class="col-md-4">
					<div class="free_cntnt">
						<div class="icn">
							<i class="fa-solid fa-truck-fast"></i>
						</div>
						<div class="cntnt">
							<h4>Free shipping worldwide</h4>
							<p>On order over $200</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="free_cntnt">
						<div class="icn">
							<i class="fa-solid fa-rotate-left"></i>
						</div>
						<div class="cntnt">
							<h4>30 days free return</h4>
							<p>On order over $200</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="free_cntnt">
						<div class="icn">
							<i class="fa-solid fa-phone"></i>
						</div>
						<div class="cntnt">
							<h4>(+91) 9876543210</h4>
							<p>Contact with me</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Dynamicat/>

        </div>
    )
}

export default ProductDetails;