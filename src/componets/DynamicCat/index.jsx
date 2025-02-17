import Slider from "react-slick";
import './style.css'
import { Link } from 'react-router-dom';
const Dynamicat = ()=>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    return(
        <div>



<section className="container-fluid pt-5 pb-5">
    <div className='container'>
    <div className="row">
			<div className="col-md-12">
				<div className="heading">
					<h4>Beauty, Food, Toys & more</h4>
				</div>
			</div>
		</div>

        <div className="row">
            <div className="col-md-12 homeSub">
            <Slider {...settings}>
                <div className="item">
                <div className="cat2">
				    <Link to="/products">
				    	<div className="cat2_cntnt">
				    		<img src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)" />
				    		<p>Laptop</p>
				    		<h6>Upto 80%off</h6>
				    	</div>
				    </Link>
				</div>
                </div>
                <div className="item">
                <div className="cat2">
				    <Link to="/products">
				    	<div className="cat2_cntnt">
				    		<img src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)" />
				    		<p>Laptop</p>
				    		<h6>Upto 80%off</h6>
				    	</div>
				    </Link>
				</div>
                </div>
                <div className="item">
                <div className="cat2">
				    <Link to="/products">
				    	<div className="cat2_cntnt">
				    		<img src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)" />
				    		<p>Laptop</p>
				    		<h6>Upto 80%off</h6>
				    	</div>
				    </Link>
				</div>
                </div>
                <div className="item">
                <div className="cat2">
				    <Link to="/products">
				    	<div className="cat2_cntnt">
				    		<img src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)" />
				    		<p>Laptop</p>
				    		<h6>Upto 80%off</h6>
				    	</div>
				    </Link>
				</div>
                </div>
                <div className="item">
                <div className="cat2">
				<Link to="/products">
				    	<div className="cat2_cntnt">
				    		<img src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)" />
				    		<p>Laptop</p>
				    		<h6>Upto 80%off</h6>
				    	</div>
				    </Link>
				</div>
                </div>
            </Slider>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}
export default Dynamicat;