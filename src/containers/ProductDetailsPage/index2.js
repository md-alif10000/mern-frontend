import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById, addReview } from "../../actions";
import Layout from "../../components/Layout";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import "./style2.css";
import { generatePublicUrl } from "../../urlconfig.js";
import { addToCart } from "../../actions/cart.action";
import { Redirect } from "react-router";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import Review from "./review";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));




export default function ProductDetails2(props) {
	  const [value, setValue] = React.useState(0);

		const handleChange = (event, newValue) => {
			setValue(newValue);
		};
	const [review, setReview] = useState('')
	const [rating, setRating] = useState(null)




	
	 const classes = useStyles();
      const dispatch = useDispatch();
			const product = useSelector((state) => state.product);
			const {reviews}=product.productDetails
			useEffect(() => {
				let { productId } = props.match.params;
				console.log(props);
				const payload = {
					params: {
						productId,
					},
				};
				dispatch(getProductDetailsById(payload));
			}, []);
						let { productId } = props.match.params;


				const onSubmitReview = (e) => {
					e.preventDefault();
					console.log({ productId, review, rating });
					dispatch(addReview({productId,review,rating}));
				};


				    const settings = {
							customPaging: function (i) {
								return (
									<a>
										<img
											src={generatePublicUrl(
												product.productDetails.productPictures[i + 1].img
											)}
										/>
									</a>
								);
							},
							dots: true,
							dotsClass: "slick-dots slick-thumb",
							infinite: true,
							speed: 500,
							slidesToShow: 1,
							slidesToScroll: 1,
							autoplay: true,
							speed: 2000,
							autoplaySpeed: 2000,
						};






			if (Object.keys(product.productDetails).length === 0) {
				return null;
			}



    return (
			<Layout>
				<section className='section product-detail m-0 p-1'>
					<div className='details container'>
						<div>
							
							<Slider {...settings}>
								{
									product.productDetails.productPictures.map((image,index)=>
										
										<div className='imgContainer'>
											<img  src={generatePublicUrl(image.img)} />
										</div>

									)
								}
								
								{/* <div>
									<img src={generatePublicUrl(product.productDetails.productPictures[1].img)} />
								</div>
								<div>
									<img src={generatePublicUrl(product.productDetails.productPictures[2].img)} />
								</div>
								<div>
									<img src={generatePublicUrl(product.productDetails.productPictures[3].img)} />
								</div> */}
							</Slider>
						</div>
						<div className='right'>
							<span>Home/T-shirt</span>
							<h3>{product.productDetails.name}</h3>
							<div className=''>${product.productDetails.price}</div>
							<form>
								<div>
									<select>
										<option value='Select Size' selected disabled>
											Select Size
										</option>
										<option value='1'>32</option>
										<option value='2'>42</option>
										<option value='3'>52</option>
										<option value='4'>62</option>
									</select>
									<span>
										<i className='fas fa-chevron-down'></i>
									</span>
								</div>
							</form>

							<form className='form'>
								<input type='text' placeholder='1' />
								<a
									style={{ backgroundColor: "fce00d" }}
									onClick={() => {
										const { _id, name, price } = product.productDetails;
										const img = product.productDetails.productPictures[0].img;
										dispatch(addToCart({ _id, name, price, img }));
										// <Redirect to='/cart' />;
										props.history.push("/cart");
									}}
									className='addToCart'>
									Add To Cart
								</a>
							</form>
							<h3>Product Detail</h3>
							<p>{product.productDetails.desc}</p>
						</div>
					</div>
				</section>

				<div className='container text-lg' style={{fontSize:'20px'}}>
					<div className={classes.root}>
						<AppBar position='static' style={{fontSize:'20px'}}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label='simple tabs example'>
								<Tab label='Details' {...a11yProps(0)} />
								<Tab label='Reviews' {...a11yProps(1)} />
								<Tab label='Submit Reviews' {...a11yProps(2)} />
							</Tabs>
						</AppBar>
						<TabPanel value={value} index={0}>
							<p>{product.productDetails.desc}</p>
						</TabPanel>

						<TabPanel value={value} index={1}>
							{console.log(reviews)}
							{reviews.map((review, index) => (
								<Review
									name={review.userId.name}
									review={review.review}
									rating={review.rating}
								/>
							))}
						</TabPanel>
						<TabPanel value={value} index={2}>
							<div>
								<TextField
									id='outlined-multiline-static'
									label='Write Your Review'
									multiline
									rows={4}
									value={review}
									onChange={(e) => setReview(e.target.value)}
									// defaultValue='Default Value'
									variant='outlined'
									fullWidth
								/>
							</div>

							<div>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor='age-native-simple'>
										Select Rating..
									</InputLabel>
									<Select
										native
										value={rating}
										onChange={(e) => setRating(e.target.value)}
										style={{ width: "300px" }}
										inputProps={{
											name: "age",
											id: "age-native-simple",
										}}>
										<option aria-label='None' value='' />
										<option value={5}>Five Star</option>
										<option value={4}>Four Star</option>
										<option value={3}>Three Star</option>
										<option value={2}>Two Star</option>
										<option value={1}>One Star</option>
									</Select>
								</FormControl>
							</div>
							<div className='mt-4'>
								<Button
									style={{ backgroundColor: "#fce00d", color: "black" }}
									onClick={onSubmitReview}>
									Submit your Review
								</Button>
							</div>
						</TabPanel>
					</div>
				</div>
			</Layout>
		);
}
