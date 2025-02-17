import React, { useRef, useState } from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import './style.css';
import '../../../node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import '../../../node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Deatils = ()=>{
    const zoomSlider = useRef();
    const [zoomImg, setzoomImg] = useState("https://media.istockphoto.com/id/2161896294/photo/woman-smiling-and-expressing-gratitude-during-a-conversation.webp?a=1&b=1&s=612x612&w=0&k=20&c=e1EdH8Aus-LOacUwNExQ1aOhwIHiFFk6jYKZ32w2vU8=")
    var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
      
};
const Goto = (index)=>{
    zoomSlider.current.slick
}
Goto();

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
                        <div classname="zoomProducts">
                            <InnerImageZoom  zoomType="hover" zoomScale={2} src="https://media.istockphoto.com/id/2161896294/photo/woman-smiling-and-expressing-gratitude-during-a-conversation.webp?a=1&b=1&s=612x612&w=0&k=20&c=e1EdH8Aus-LOacUwNExQ1aOhwIHiFFk6jYKZ32w2vU8="  />
                        
                            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                <div>
                    <div className="top_cat_cntnt">
				    		<img src='https://vlebazaar.in/image/cache/catalog/printer%201-100x100.jpeg' onClick={()=> Goto(0)} />
				    			
				    	</div>

                </div>
                <div>
                    <div className="top_cat_cntnt">
				    		<img src="https://vlebazaar.in/image/cache/catalog/printer%202-100x100w.jpeg" onClick={()=> Goto(1)}/>
				    			
				    	</div>
                    </div>
                <div>
                <div className="top_cat_cntnt">
				    		<img src={Cat3}  onClick={()=> Goto(2)}/>
				    			
				</div>
            </div>
            <div>
                <div className="top_cat_cntnt">
				    		<img src={Cat4} onClick={()=> Goto(3)}/>
				    			
				</div>
            </div>
            <div>
                <div className="top_cat_cntnt">
				    		<img src={Cat5} onClick={()=> Goto(4)}/>
				    			
				</div>
            </div>
            
        
      </Slider>
                        </div>
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