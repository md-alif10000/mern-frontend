import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Redirect } from "react-router-dom";
import StepLabel from "@material-ui/core/StepLabel";
import { Link } from "react-router-dom";
import { Button, SwipeableDrawer } from "@material-ui/core";
import { register } from "../../../actions/auth.action";
import "./style2.css";

import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Header from "../../../components/Header/index";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	layout: {
		width: "auto",
		fontSize: "1.8 rem",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(400 + theme.spacing(2) * 2)]: {
			width: 400,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

export default function () {
	const steps = ["Register info", "OTP verification"];
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.auth);
	const cart = useSelector((state) => state.cart);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};




	//Register Form

	function getStepContent(activeStep) {
		switch (activeStep) {
			case 0:
				return <Register />;
			case 1:
				return <Otp/>;
			// case 2:
			// 	return <PaymentForm />;
			default:
				throw new Error("Unknown step");
		}
	}
	function Register(props) {

        	const [name, setName] = useState("");
					const [email, setEmail] = useState("");
					const [phone, setPhone] = useState("");
					const [password, setPassword] = useState("");
					const [confirmPassword, setConfirmPassword] = useState("");

                    const userRegister = (e) => {
											e.preventDefault();
											setActiveStep(activeStep + 1);
											// if (password != confirmPassword) {
											// 	return new Noty({
											// 		text: "Password Didn't match ",
											// 	}).show();
											// }
											dispatch(register({ name, email, phone, password }));
										};


		return (
			<>
		
			<div>
				
				<div className='login-container'>
					<div className='icon-container'></div>
					<form>
						<h2>Register</h2>
						<div className='input-container'>
							<label className='label'>Enter Your Full name</label>
							<br />
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className='input'
								type='text'
								placeholder='Your Full Name'
							/>
						</div>
						<div className='input-container'>
							<label className='label'>Enter Your Email</label>
							<br />
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='input'
								type='email'
								placeholder='Enter your email'
							/>
						</div>
						<div className='input-container'>
							<label className='label'>Enter Your Phone Number</label>
                           
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
						<div className='input-container'>
							<label className='label'>Confirm Password</label>
							<br />
							<input
								onChange={(e) => setConfirmPassword(e.target.value)}
								value={confirmPassword}
								className='input'
								type='password'
								placeholder='Confirm password'
							/>
						</div>

						<div className='btn-container'>
							<button className='submit-btn' onClick={userRegister}>
								Register
							</button>
						</div>
						<p>
							Already have an account?{" "}
							<Link style={{ color: "#b8892c" }} to='/login'>
								Login here
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
			</>
		);
	}

	const Otp = (props) => {
		return (
			<div className='login-container'>
				<div className='icon-container'></div>
				<form>
					<h2>Submit OTP</h2>

					<div className='input-container'>
						<label className='label'>We have sent an OTP to your phone</label>

						<br />
						<input
							// onChange={(e) => setPhone(e.target.value)}
							className='input'
							type='text'
							placeholder='Enter your OTP'
						/>
					</div>

					<div className='btn-container'>
						<button className='submit-btn'>Submit & Register</button>
					</div>
					<p>
						Already have an account?{" "}
						<Link style={{ color: "#b8892c" }} to='/login'>
							Login here
						</Link>
					</p>
				</form>
			</div>
		);
	};





	if (auth.authenticate) return <Redirect to='/' />;


                    	

	return (
		<React.Fragment>
			<Header fixed />
			<div >
			
				{/* <Header fixed /> */}
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Typography component='h1' variant='h4' align='center'>
							<h3>Register</h3>
						</Typography>
						<Stepper activeStep={activeStep} className={classes.stepper}>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
						
						<React.Fragment>
							{activeStep === steps.length ? (
								<React.Fragment>
									<Typography variant='h5' gutterBottom>
										Thank you for your order.
									</Typography>
									<Typography variant='subtitle1'>
										Your order is Placed. We have emailed your order
										confirmation to <strong>{auth.user.email}</strong>, and will
										send you an update when your order has shipped.
									</Typography>
									<Link to='/account/orders'>
										<Button color='orange'>Go to order page</Button>
									</Link>
								</React.Fragment>
							) : (
								<React.Fragment>
									{getStepContent(activeStep)}
									<div className={classes.buttons}>
										{activeStep !== 0 && (
											<Button onClick={handleBack} className={classes.button}>
												Back
											</Button>
										)}
										{/* {activeStep == 1 ? (
											<Button
												variant='contained'
												color='primary'
												onClick={handleNext}
												className={classes.button}>
												{activeStep === steps.length - 1
													? "Place order"
													: "Next"}
											</Button>
										) : null} */}
									</div>
								</React.Fragment>
							)}
						</React.Fragment>
					</Paper>
				</main>
			</div>
		</React.Fragment>
	);
}
