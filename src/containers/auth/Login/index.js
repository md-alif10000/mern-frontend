import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../../../components/Header";
import { register,login } from "../../../actions/auth.action";
import { Link } from "react-router-dom";
import Noty from "noty";
import Swal from 'sweetalert2'

export default function Register(props) {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.auth);

	const userLogin = (e) => {
		e.preventDefault();
		  
		if(phone==''){
			return Swal.fire("Oops...", "Phone number is required..", "error");
		}
				
		if (password=='') {
		return Swal.fire("Oops...", "Password can not be empty..", "error");
		}
		dispatch(login({ phone, password }));
	};

	

	if (auth.authenticate) return <Redirect to='/' />;
	return (
		<div>
			<Header/>
			<div className='login-container'>
				<div className='icon-container'></div>
				<form>
					<h2>Login</h2>

					<div className='input-container'>
						<label className='label'>Enter Your Phone number</label>
						<br />
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className='input'
							type='text'
							placeholder='Enter your phone'
						/>
					</div>
					<div className='input-container'>
						<label className='label'>Password</label>
						<br />
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='input'
							type='password'
							placeholder='Your password'
						/>
					</div>

					<div className='btn-container'>
						<button className='submit-btn' onClick={userLogin}>
							Login
						</button>
					</div>
					<p>
						Don't have an account?
						<Link style={{ color: "#b8892c" }} to='/register'>
							Register here
						</Link>
					</p>
					<p>
						Forget password?
						<Link style={{ color: "#b8892c" }} to='/change_password'>
							reset here
						</Link>
					</p>
					<h2>OR</h2>
					<p>Login With</p>
					<div className='loginicon-container'>
						<div className='icon'>
							<img
								className='iconImg'
								src='https://img-authors.flaticon.com/google.jpg'
							/>
						</div>
						<div className='icon'>
							<img
								className='iconImg'
								src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
