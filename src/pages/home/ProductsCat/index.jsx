import Ads from '../../../assets/images/ele_ads.webp'
import DynamicCat from "../../../componets/DynamicCat/index";
import './style.css'
import { Link } from 'react-router-dom';
const ProductCat = ()=>{
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
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="heading">
					<h4>Best of Electronics</h4>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-6 col-md-4 pt-2" >
				<div className="cat_avtar">
					<div className="cat_img">
					<Link to="/products">
                            <div className='img'>
							    <img src="https://www.jiomart.com/images/product/original/491997699/apple-iphone-13-128-gb-midnight-black-digital-o491997699-p590798548-0-202208221207.jpeg?im=Resize=(360,360)" />
                            </div>
                        </Link>
					</div>
					<div className="cat_cntnt">
					<Link to="/products">Lexiwarm Product Sample</Link>
						<h6>Rs. 1000/-</h6>
						<button className="btn add_btn" type="button"><i className="fa-solid fa-cart-plus"></i></button>
					</div>
				</div>
			</div>

			<div className="col-6 col-md-4 pt-2">
				<div className="cat_avtar">
					<div className="cat_img">
					<Link to="/products">
                        <div className='img'>
							<img src="https://www.jiomart.com/images/product/original/494338867/philips-xl-digitally-connected-air-fryer-black-hd925590-digital-o494338867-p607853165-0-202402101416.jpeg?im=Resize=(360,360)" />
						</div>
                        </Link>
					</div>
					<div className="cat_cntnt">
					<Link to="/products">Lexiwarm Product Sample</Link>
						<h6>Rs. 1000/-</h6>
						<button className="btn add_btn" type="button"><i className="fa-solid fa-cart-plus"></i></button>
					</div>
	
				</div>
			</div>
			<div className="col-6 col-md-4 pt-2">
				<div className="cat_avtar">
					<div className="cat_img">
					<Link to="/products">
                        <div className='img'>
							<img src="https://www.jiomart.com/images/product/original/492572875/philips-essential-spectre-hd9200-airfryer-with-healthy-frying-with-rapid-air-technology-black-digital-o492572875-p593828684-0-202209162302.jpeg?im=Resize=(360,360)" />
                        </div>
                        </Link>
					</div>
					<div className="cat_cntnt">
						<Link to="/products">Lexiwarm Product Sample</Link>
						<h6>Rs. 1000/-</h6>
						<button className="btn add_btn" type="button"><i className="fa-solid fa-cart-plus"></i></button>
					</div>
				</div>
			</div>

			<div className="col-6 col-md-4 pt-2">
				<div className="cat_avtar">
					<div className="cat_img">
						<Link to="/products">
                            <div className="img">
							    <img src="https://www.jiomart.com/images/product/original/491581380/usha-instafresh-floor-standing-18u-fs-bottled-water-dispenser-hot-normal-and-cold-functions-digital-o491581380-p590442528-0-202310081234.jpeg?im=Resize=(360,360)" />
                            </div>
                        </Link>
					</div>
					<div className="cat_cntnt">
						<Link to="/products">Lexiwarm Product Sample</Link>
						<h6>Rs. 1000/-</h6>
						<button className="btn add_btn" type="button"><i className="fa-solid fa-cart-plus"></i></button>
					</div>
				</div>
			</div>
			<div className="col-6 col-md-4 pt-2">
				<div className="cat_avtar">
					<div className="cat_img">
						<Link to="/products">
                            <div className="img">
							    <img src="https://www.jiomart.com/images/product/original/rvjjxcpwps/prolife-pride-dlx-1500w-1-8l-electric-kettle-silver-product-images-orvjjxcpwps-p603865974-0-202308132030.jpg?im=Resize=(360,360)" />
                            </div>
                        </Link>
					</div>
					<div className="cat_cntnt">
						<Link to="/products">Lexiwarm Product Sample</Link>
						<h6>Rs. 1000/-</h6>
						<button className="btn add_btn" type="button"><i className="fa-solid fa-cart-plus"></i></button>
					</div>
				</div>
			</div>
			<div className="col-6 col-md-4 pt-2">
				<div className="cat_avtar">
					<div className="cat_img">
						<Link to="/products">
                            <div className="img">
							    <img src="https://www.jiomart.com/images/product/original/rvv3kohjjj/bajaj-shield-series-new-shakti-25l-vertical-storage-water-heater-for-home-5-star-rated-geyser-multiple-safety-systems-for-high-rise-buildings-10-yr-tank-6-yr-element-4-yr-product-warranty-white-product-images-orvv3kohjjj-p610087041-0-202410091525.jpg?im=Resize=(360,360)" />
                            </div>
                        </Link>
					</div>
					<div className="cat_cntnt">
						<Link to="/products">Lexiwarm Product Sample</Link>
						<h6>Rs. 1000/-</h6>
						<button className="btn add_btn" type="button"><i className="fa-solid fa-cart-plus"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="ads_banner">
	<img src={Ads} className="img-fluid" />
</section>

<DynamicCat/>

        </div>
    )
}

export default ProductCat;