import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
			<footer id='footer' className='section footer'>
				<div className='container'>
					<div className='footer-container'>
						<div className='footer-center'>
							<h3>EXTRAS</h3>
							<Link to='#'>Brands</Link>
							<Link to='#'>Gift Certificates</Link>
							<Link to='#'>Affiliate</Link>
							<Link to='#'>Specials</Link>
							<Link to='#'>Site Map</Link>
						</div>
						<div className='footer-center'>
							<h3>INFORMATION</h3>
							<Link to='/about-us'>About Us</Link>
							<Link to='/privacy-policy'>Privacy Policy</Link>
							<Link to='/terms&conditions'>Terms & Conditions</Link>
							<Link to='/contact-us'>Contact Us</Link>
							<Link to='#'>Site Map</Link>
						</div>
						<div className='footer-center'>
							<h3>MY ACCOUNT</h3>
							<Link to='/account'>My Account</Link>
							<Link to='/acccount/orders'>Order History</Link>
							<Link to='#'>Wish List</Link>
							<Link to='/newsletter'>Newsletter</Link>
							<Link to='#'>Returns</Link>
						</div>
						<div className='footer-center'>
							<h3>CONTACT US</h3>
							<div>
								<span>
									<i className='fas fa-map-marker-alt'></i>
								</span>
								42 Dream House, Dreammy street, 7131 Dreamville, USA
							</div>
							<div>
								<span>
									<i className='far fa-envelope'></i>
								</span>
								company@gmail.com
							</div>
							<div>
								<span>
									<i className='fas fa-phone'></i>
								</span>
								456-456-4512
							</div>
							<div className='payment-methods'>
								<img src='./images/payment.png' alt='' />
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
}
