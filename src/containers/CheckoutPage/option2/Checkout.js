import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import {Link} from 'react-router-dom'
import Review from "./Review";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import { addAddress, getAddress, addOrder } from "../../../actions/user.action";
import { getCartItems } from "../../../actions/cart.action";
import "./style.css";
import Swal from "sweetalert2";
import { Button, SwipeableDrawer } from "@material-ui/core";
import "./style.css";
import { Redirect } from "react-router";
import Header from "../../../components/Header/index";

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{"Copyright © "}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	layout: {
		width: "auto",
		fontSize: "1.8 rem",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
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

export default function Checkout(props) {
	const [paymentType, setPaymentType] = useState("");
	console.log(paymentType);
	const user = useSelector((state) => state.user);
	const selectedAddress = user.address.slice(user.address.length - 1)[0];

	const steps = ["Shipping address", "Review your order", " Payment details"];
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

	//Address from Hooks............

	//Order confirm hooksssss............
	const [confirmOrder, setConfirmOrder] = useState("");
	const onConfirmOrder = () => {
		const totalAmount = Object.keys(cart.cartItems).reduce(
			(totalPrice, key) => {
				const { price, qty } = cart.cartItems[key];
				return totalPrice + price * qty;
			},
			0
		);
		const items = Object.keys(cart.cartItems).map((key) => ({
			productId: key,
			payablePrice: cart.cartItems[key].price,
			purchasedQty: cart.cartItems[key].qty,
		}));
		const payload = {
			addressId: selectedAddress._id,
			totalAmount,
			items,
			paymentStatus: "pending",
			paymentType,
		};

		console.log(payload);
		dispatch(addOrder(payload));
		setActiveStep(activeStep+1)
		setConfirmOrder(true);
	};

	// useEffect(() => {
	// 	dispatch(getAddress());
	// }, [user.address]);

	useEffect(() => {
		auth.authenticate && dispatch(getAddress());
		auth.authenticate && dispatch(getCartItems());
	}, [auth.authenticate]);

	function getStepContent(activeStep) {
		switch (activeStep) {
			case 0:
				return <AddressForm />;
			case 1:
				return <Review />;
			case 2:
				return <PaymentForm />;
			default:
				throw new Error("Unknown step");
		}
	}

	//Address form............

	function AddressForm(props) {
		const previousAddress = user.address;
		const oldAddress = user.address.slice(user.address.length - 1)[0];
		console.log(oldAddress);
		// useEffect(() => {
		// 	dispatch(getAddress());
		// }, [user.address]);
		const [name, setName] = useState(oldAddress ? oldAddress.name : "");

		const [mobileNumber, setMobileNumber] = useState(
			oldAddress ? oldAddress.mobileNumber : ""
		);
		const [zipCode, setZipCode] = useState(
			oldAddress ? oldAddress.zipCode : ""
		);

		const [address, setAddress] = useState(
			oldAddress ? oldAddress.address : ""
		);
		const [cityDistrict, setCityDistrict] = useState(
			oldAddress ? oldAddress.cityDistrict : ""
		);

		const [alternatePhone, setAlternatePhone] = useState(
			oldAddress ? oldAddress.alternatePhone : ""
		);

		console.log(oldAddress);
		const [id, setId] = useState(oldAddress ? oldAddress._id : "");
		console.log(name);

		const onAddressSubmit = (e) => {
			const payload = {
				address: {
					name,
					mobileNumber,
					zipCode,
					address,
					cityDistrict,
					alternatePhone,
				},
			};
			console.log(payload);
			if (id) {
				payload.address._id = id;
			}
			if (name == "") {
				return Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Name is required...!",
				});
			}
			if (address == "") {
				return Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Address is required....!",
				});
			}

			if (mobileNumber == "") {
				return Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Mobile number is required..!",
				});
			}
			if (zipCode == "") {
				return Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Zipcode is required..!",
				});
			}
			if (cityDistrict == "") {
				return Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "City/district is required..!",
				});
			}

			dispatch(addAddress(payload));
			setActiveStep(activeStep + 1);
		};

		return (
			<React.Fragment>
				<div className='mainContainer' style={{ fontSize: "1.8rem" }}>
					<Typography variant='h6' gutterBottom>
						<h4>Shipping address</h4>
					</Typography>

					<div class='content'>
						<form action='#'>
							<div class='user-details'>
								<div class='input-box'>
									<span class='details'>Full Name</span>
									<input
										type='text'
										placeholder='Enter your name'
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div class='input-box'>
									<span class='details'>Full Address</span>
									<input
										type='text'
										placeholder='Enter your address'
										required
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div class='input-box'>
									<span class='details'>City/District</span>
									<input
										type='text'
										placeholder='Enter your email'
										required
										value={cityDistrict}
										onChange={(e) => setCityDistrict(e.target.value)}
									/>
								</div>
								<div class='input-box'>
									<span class='details'>Zip Code</span>
									<input
										type='text'
										placeholder='Enter your number'
										required
										value={zipCode}
										onChange={(e) => setZipCode(e.target.value)}
									/>
								</div>
								<div class='input-box'>
									<span class='details'>Phone Number</span>
									<input
										value={mobileNumber}
										type='text'
										placeholder='Enter your Phone Number'
										required
										onChange={(e) => setMobileNumber(e.target.value)}
									/>
								</div>
								<div class='input-box'>
									<span class='details'>Secondary Phone (optional)</span>
									<input
										value={alternatePhone}
										type='text'
										placeholder='Enter Secondary Phone'
										required
										onChange={(e) => setAlternatePhone(e.target.value)}
									/>
								</div>
							</div>
							{/* <div class='gender-details'>
								<input type='radio' name='gender' id='dot-1' />
								<input type='radio' name='gender' id='dot-2' />
								<input type='radio' name='gender' id='dot-3' />
								<span class='gender-title'>Gender</span>
								<div class='category'>
									<label for='dot-1'>
										<span class='dot one'></span>
										<span class='gender'>Male</span>
									</label>
									<label for='dot-2'>
										<span class='dot two'></span>
										<span class='gender'>Female</span>
									</label>
									<label for='dot-3'>
										<span class='dot three'></span>
										<span class='gender'>Prefer not to say</span>
									</label>
								</div>
							</div> */}
							<div class='button'>
								<input
									type='submit'
									value='Submit Address'
									onClick={onAddressSubmit}
								/>
							</div>
						</form>
					</div>
					{/* <Button
						fullWidth
						style={{ backgroundColor: "yellow", color: "gray" }}
						
						<h5>Submit Address</h5>
					</Button> */}
				</div>
			</React.Fragment>
		);
	}

	function PaymentForm() {
		return (
			<React.Fragment>
				<Typography variant='h6' gutterBottom>
					Payment method
				</Typography>
				<Grid container spacing={3}>
					<FormControl component='fieldset'>
						{/* <FormLabel component='legend'>Payment Type</FormLabel> */}
						<RadioGroup
							aria-label='Payment Type'
							name='gender1'
							value={paymentType}
							onChange={(e) => setPaymentType(e.target.value)}>
							<FormControlLabel
								value='bkash'
								control={<Radio />}
								label='Bkash'
							/>
							<FormControlLabel
								value='ssl'
								control={<Radio />}
								label='SSL Commerce'
							/>
							<FormControlLabel
								value='cod'
								control={<Radio />}
								label='Cash On Delivery'
							/>
						</RadioGroup>
					</FormControl>
					<Button
						fullWidth
						style={{ color: "black", backgroundColor: "#f0c800" }}
						onClick={paymentType == "" ? null : onConfirmOrder}>
						<h5>Confirm Order</h5>
					</Button>
				</Grid>
			</React.Fragment>
		);
	}

	if (!cart.cartItems) {
		return <Redirect to='/' />;
	
	}
		if (!auth.authenticate) return <Redirect to='/login'></Redirect>;
	return (
		<React.Fragment>
			<div className='mainContainer'>
				{/* <CssBaseline /> */}
				<Header fixed/>
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Typography component='h1' variant='h4' align='center'>
							<h3>Checkout</h3>
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
										{activeStep == 1 ? (
											<Button
												variant='contained'
												color='primary'
												onClick={handleNext}
												className={classes.button}>
												{activeStep === steps.length - 1
													? "Place order"
													: "Next"}
											</Button>
										) : null}
									</div>
								</React.Fragment>
							)}
						</React.Fragment>
					</Paper>
					<Copyright />
				</main>
			</div>
		</React.Fragment>
	);
}
