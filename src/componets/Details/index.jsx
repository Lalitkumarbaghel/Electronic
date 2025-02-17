import React from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import catImg from '../../assets/images/img1.jpg'
//import './style.css'
import { Link } from "react-router-dom";
const Deatils = ()=>{
    return(
        <>
            <section className="container pt-2 pb-2 productsDetails">
                <ul className="breadcrumb">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link >Products</Link></li>
                    <li><Link >Products Details</Link></li>
                </ul>
                <div className="row">
                    <div className="col-md-6 productZoom">
                    <InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />
                    </div>
                    <div className="col-md-6 productdetails">


                    <div className="col-md-7">
				

                <h3 className="mb-2">Premium Wireless Headphones</h3>
                <p className="text-muted mb-4">SKU: WH1000XM4</p>
                <div classname="mb-2">
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
                    
                </div>
                <div className="mb-4">
                    </div>
                <button className="btn btn-primary btn-lg mb-3 me-2">
                        Add to Cart
                    </button>
                <button className="btn btn-outline-secondary btn-lg mb-3">
                         Add to Wishlist
                    </button>
                <div className="mt-4">
                    <h5>Key Features:</h5>
                    <ul >
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
        </>
    )
}
export default Deatils;