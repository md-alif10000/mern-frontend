// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import "./style.css";
// import Header from "../../../components/Header";
// import { register } from "../../../actions/auth.action";
// import { Link } from "react-router-dom";
// import Noty from "noty";

// export default function Register(props) {
// 	const [phone, setPhone] = useState("");
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	const dispatch = useDispatch();

// 	const auth = useSelector((state) => state.auth);

// 	const userRegister = () => {
// 		if(password!=confirmPassword){
// 			return new Noty({
// 				text: "Password Didn't match ",

// 			}).show();

// 		}
// 		dispatch(register({ name, email, phone, password }));
// 	};

// 	useEffect(() => {
// 		if (auth.authenticate) return <Redirect to='/' />;
// 	}, [auth.authenticate]);
// 	if (auth.authenticate) return <Redirect to='/' />;

// 	return (
// 		<>
// 			<Header />
// 			<div className='wrapper' style={{ margin: "auto" }}>
// 				<div className='title'>Register</div>
// 				<form>
// 					<div className='field'>
// 						<input
// 							type='text'
// 							required
// 							value={name}
// 							onChange={(e) => setName(e.target.value)}
// 						/>
// 						<label>Full Name</label>
// 					</div>
// 					<div className='field'>
// 						<input
// 							type='text'
// 							required
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 						<label>Email Address</label>
// 					</div>
// 					<div className='field'>
// 						<input
// 							type='text'
// 							required
// 							value={phone}
// 							onChange={(e) => setPhone(e.target.value)}
// 						/>
// 						<label>Phone number</label>
// 					</div>
// 					<div className='field'>
// 						<input
// 							type='password'
// 							value={password}
// 							required
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 						<label>Password</label>
// 					</div>
// 					<div className='field'>
// 						<input
// 							type='password'
// 							required
// 							value={confirmPassword}
// 							onChange={(e) => setConfirmPassword(e.target.value)}
// 						/>
// 						<label>Confirm Password</label>
// 					</div>
// 					<div className='content'>
// 						<div className='checkbox'>
// 							<input type='checkbox' id='remember-me' />
// 							<label for='remember-me'>Remember me</label>
// 						</div>
// 						<div className='pass-link'>
// 							<a href=''>Forgot password?</a>
// 						</div>
// 					</div>
// 					<div className='field'>
// 						<input type='submit' onClick={userRegister} value='Register' />
// 					</div>
// 					<div className='signup-link'>
// 						Don't have an account? <Link to='/login'>Register now</Link>
// 					</div>
// 				</form>
// 			</div>
// 		</>
// 	);
// }
