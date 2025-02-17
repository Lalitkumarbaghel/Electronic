import React from "react";
import Slider from "react-slick";
import './index.css'
import Cat1 from '../../../assets/images/img1.jpg'
import Cat2 from '../../../assets/images/img2.jpg'
import Cat3 from '../../../assets/images/img3.jpg'
import Cat4 from '../../../assets/images/img4.jpg'
import Cat5 from '../../../assets/images/img5.jpg'
import { Link } from "react-router-dom";
export default function TopCat() {
    var settings = {
        dots: false,
        arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
        }
      ]
    };
    return (

        <section className="catSlider cat_top">
            <div className="container">
      <Slider {...settings}>
                <div>
                    <div className="top_cat_cntnt">
                    <Link to="/products">
				    		<img src={Cat1} />
				    			<p>Laptop</p>
				    		</Link>
				    	</div>

                </div>
                <div>
                    <div className="top_cat_cntnt">
                    <Link to="/products">
				    		<img src={Cat2} />
				    			<p>Laptop</p>
				    		</Link>
				    	</div>
                    </div>
                <div>
                <div className="top_cat_cntnt">
				    		<Link to="/products">
				    		<img src={Cat3} />
				    			<p>Laptop</p>
				    		</Link>
				</div>
            </div>
            <div>
                <div className="top_cat_cntnt">
				    		<Link to="/products">
				    		<img src={Cat4} />
				    			<p>Laptop</p>
				    		</Link>
				</div>
            </div>
            <div>
                <div className="top_cat_cntnt">
				    		<Link to="/products">
				    		<img src={Cat5} />
				    			<p>Laptop</p>
				    		</Link>
				</div>
            </div>
            <div>
                <div className="top_cat_cntnt">
				    		<Link to="/products">
				    		<img src={Cat3} />
				    			<p>Laptop</p>
				    		</Link>
				</div>
            </div>
            <div>
                <div className="top_cat_cntnt">
				    		<Link to="/products">
				    		<img src={Cat2} />
				    			<p>Laptop</p>
				    		</Link>
				</div>
            </div>
        
      </Slider>
      </div>
      </section>
    );
  }