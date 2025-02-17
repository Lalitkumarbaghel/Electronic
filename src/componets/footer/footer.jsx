import './footer.css'
const Footer = ()=>{
    return (
        <div>
            
<footer className="container-fluid pt-5 pb-5 refer_clients_bg">
	<div className="container">
		<div className="row">
			<div className="col-md-3">
				<div className="footer_cntnt">
					<h5>Contact Us</h5>
					<p>Delhi</p>
					<ul className="social_icns">
						<li>
							<a href="#"><i className="fab fa-facebook-f"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-twitter"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-linkedin-in"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-youtube"></i></a>
						</li>
						<li>
							<a href="#"><i className="fab fa-instagram"></i></a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-md-3">
				<div className="footer_cntnt">
					<h5>About Us</h5>
					<ul className="links">
						<li>
							<a href="#">About us</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Help Center</a>
						</li>
						<li>
							<a href="#">Our Team</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li>
							<a href="#">Pay Online</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-md-3">
				<div className="footer_cntnt">
					<h5>Inner Pages</h5>
					
					<ul className="links">
						<li>
							<a href="#">Newsletter</a>
						</li>
						<li>
							<a href="#">Special Offers</a>
						</li>
						<li>
							<a href="#">Become a Partner</a>
						</li>
						<li>
							<a href="#">Portfolio</a>
						</li>
						
					</ul>
				</div>
			</div>
			<div className="col-md-3">
				<div className="footer_cntnt">
					<h5>My Account</h5>
					<ul className="links">
						<li>
							<a href="login.html">Login</a>
						</li>
						<li>
							<a href="signup.html">Signup</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</div>
</footer>
        </div>
    )
}

export default Footer;