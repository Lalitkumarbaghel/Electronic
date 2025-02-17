// import CartImg from '../../assets/images/img2'
import React from 'react';
import { useState } from 'react';
import './cart.css'
const Cart = ()=>{
	const [cartVal, setVal] = useState(410)
    return (
        <div>
            



            <section className="container-fluid pt-5 pb-5 cart_bg">
	<div className="container">
		<div className="row">
			<div className="col-md-8">
				<div className="cart_cntnt_box">
					<h4>Shopping bag</h4>
				<div className="cart_box">
					<div className="cart_img">
						<a href="#">
							<img src="images/img1.avif" />
						</a>
					</div>
					<div className="cart_cntnt">
						<div className="cart_head">
							<p className="title">Laptop</p>
							<h5 className="price"><span className="cross_price">Rs.150</span> Rs. 100 </h5>
							<p className="info">Seller:LukusBrandsPvtLtd</p>
						</div>
						<div className="cart_add_btn">
							<div className="add_btn_input">
										<button className="minus_btn"><i className="fas fa-minus"></i></button>
										<input type="text" name="" className="input_txt" value={cartVal} />
										<button className="add_icn"><i className="fas fa-plus"></i></button>
								</div>
						</div>
					</div>
				</div>
				
			</div>
			</div>
			<div className="col-md-4">
				<div className="cart_total">
					<div className="cart_apply">
						<h5>Cart Total</h5>

						<div className="cart_price">
							<p className="cart_info"><span>Cart Subtotal</span> <span>Rs. 100</span></p>
							<p className="cart_info"><span>Design by Flutter top</span> <span>Free</span></p>
							<p className="cart_info"><span>Discount</span> <span>Rs. 10</span></p>
							<p className="cart_info cart_bld"><span>cart Total</span> <span>Rs. 200</span></p>
						</div>
						<form method="get" action="checkout.html">
							<button className="btn" type="submit">Apply</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>






        </div>
    )
}

export default Cart;