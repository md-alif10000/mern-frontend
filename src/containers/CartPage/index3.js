import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
	addToCart,
	decreaseCart,
	getCartItems,
} from "../../actions/cart.action";
import "./style2.css";
import CartItem2 from "./CartItem/index2";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index";

export const TotalPrice = (props) => {
	const cart = useSelector((state) => state.cart);
	return (
		<div className='total-price text-left'>
			<table>
				<tr>
					<td>Subtotal</td>
					<td>
						{Object.keys(cart.cartItems).reduce((totalPrice, key) => {
							const { price, qty } = cart.cartItems[key];
							return totalPrice + price * qty;
						}, 0)}
					</td>
				</tr>
				<tr>
					<td>Delivery Charge</td>
					<td>50</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>
						{Object.keys(cart.cartItems).reduce((totalPrice, key) => {
							const { price, qty } = cart.cartItems[key];
							return totalPrice + price * qty;
						}, 50)}
					</td>
				</tr>
			</table>
			{props.nextStep ? null : (
				<Link
					to='/checkout'
					className='checkout-btn'
					// onClick={() => <Redirect to='/checkout' />}
				>
					<h4>Proceed To Checkout</h4>
				</Link>
			)}
		</div>
	);
};

export default function CartPage3(props) {
	const cart = useSelector((state) => state.cart);
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	// const cartItems = cart.cartItems;
	const [cartItems, setCartItems] = useState(cart.cartItems);

	useEffect(() => {
		setCartItems(cart.cartItems);
	}, [cart.cartItems]);

	useEffect(() => {
		if (auth.authenticate) {
			dispatch(getCartItems());
		}
	}, [auth.authenticate]);

	const onQuantityIncrement = (_id, qty) => {
		const { name, price, img } = cartItems[_id];

		dispatch(addToCart({ _id, name, price, img }, 1));
	};

	const onQuantityDecrement = (_id, qty) => {
		const { name, price, img } = cartItems[_id];

		dispatch(addToCart({ _id, name, price, img }, -1));
	};
	if (props.onlyCartItems) {
		return (
			<>
				{" "}
				{Object.keys(cartItems).map((key, index) => (
					<CartItem2
						key={index}
						cartItem={cartItems[key]}
						onQuantityInc={onQuantityIncrement}
						onQuantityDec={onQuantityDecrement}
					/>
				))}
				<TotalPrice nextStep />
			</>
		);
	}

	console.log(cart.cartItems);

	if (cart.cartItems.length < 1 ) {
		return (
			<>
				<Header fixed />
				<div class='container-fluid mt-100'>
					<div class='row'>
						<div class='col-md-12'>
							<div class='card'>
								<div class='card-body cart'>
									<div class='col-sm-12 empty-cart-cls text-center'>
										<img
											src='https://i.imgur.com/dCdflKN.png'
											width='170'
											height='170'
											class='img-fluid mb-3 mr-3'
										/>
										<h3>
											<strong>Your Cart is Empty</strong>
										</h3>
										<h4>Add something to make me happy :)</h4>{" "}
										<a
											href='/'
											class='btn btn-primary cart-btn-transform m-3'
											data-abc='true'>
											<h2> Continue shopping</h2>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<Layout>
				<div className='container mt-1 pt-1 cart'>
					<table>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Subtotal</th>
						</tr>
						{Object.keys(cartItems).map((key, index) => (
							<CartItem2
								key={index}
								cartItem={cartItems[key]}
								onQuantityInc={onQuantityIncrement}
								onQuantityDec={onQuantityDecrement}
							/>
						))}
					</table>

					<TotalPrice />
				</div>
			</Layout>
		);
	}
}
