// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import "./style2.css";
// import Header from "../../../components/Header";
// import { register } from "../../../actions/auth.action";
// import { Link } from "react-router-dom";
// import Noty from "noty";

// export default function Register(props) {
// 		const [name, setName] = useState("");
// 			const [email, setEmail] = useState("");
// 	const [phone, setPhone] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	const dispatch = useDispatch();

// 	const auth = useSelector((state) => state.auth);

// 	const userRegister = (e) => {
// 		e.preventDefault()
// 		// if (password != confirmPassword) {
// 		// 	return new Noty({
// 		// 		text: "Password Didn't match ",
// 		// 	}).show();
// 		// }
// 		dispatch(register({ name, email, phone, password }));
// 	};

// 	// useEffect(() => {
// 	// 	if (auth.authenticate) return <Redirect to='/' />;
// 	// }, [auth.authenticate]);

// 	if (auth.authenticate) return <Redirect to='/' />;
// 	return (
// 		<div>
// 			<div className='login-container'>
// 				<div className='icon-container'></div>
// 				<form>
// 					<h2>Register</h2>
// 					<div className='input-container'>
// 						<label className='label'>Enter Your Full name</label>
// 						<br />
// 						<input
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 							className='input'
// 							type='text'
// 							placeholder='Your Full Name'
// 						/>
// 					</div>
// 					<div className='input-container'>
// 						<label className='label'>Enter Your Email</label>
// 						<br />
// 						<input
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							className='input'
// 							type='email'
// 							placeholder='Enter your email'
// 						/>
// 					</div>
// 					<div className='input-container'>
// 						<label className='label'>Enter Your Phone number</label>
// 						<br />
// 						<input
// 							value={phone}
// 							onChange={(e) => setPhone(e.target.value)}
// 							className='input'
// 							type='text'
// 							placeholder='Enter your phone'
// 						/>
// 					</div>
// 					<div className='input-container'>
// 						<label className='label'>Password</label>
// 						<br />
// 						<input
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							className='input'
// 							type='password'
// 							placeholder='Your password'
// 						/>
// 					</div>
// 					<div className='input-container'>
// 						<label className='label'>Confirm Password</label>
// 						<br />
// 						<input
// 							onChange={(e) => setConfirmPassword(e.target.value)}
// 							value={confirmPassword}
// 							className='input'
// 							type='password'
// 							placeholder='Confirm password'
// 						/>
// 					</div>

// 					<div className='btn-container'>
// 						<button className='submit-btn' onClick={userRegister}>
// 							Register
// 						</button>
// 					</div>
// 					<p>
// 						Already have an account?{" "}
// 						<Link style={{ color: "#b8892c" }} to='/login'>
// 							Login here
// 						</Link>
// 					</p>
// 					<h2>OR</h2>
// 					<p>Login With</p>
// 					<div className='loginicon-container'>
// 						<div className='icon'>
// 							<img
// 								className='iconImg'
// 								src='https://img-authors.flaticon.com/google.jpg'
// 							/>
// 						</div>
// 						<div className='icon'>
// 							<img
// 								className='iconImg'
// 								src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png'
// 							/>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }
