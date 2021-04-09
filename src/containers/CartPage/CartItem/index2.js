import React, { useState } from "react";
import { generatePublicUrl } from "../../../urlconfig";
import "./design.css";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function CartItem2(props) {
	const { _id, name, price, img } = props.cartItem;
	const [qty, setQty] = useState(props.cartItem.qty);

	const onQuantityIncrement = () => {
		setQty(qty + 1);
		props.onQuantityInc(_id, qty + 1);
	};

	const onQuantityDecrement = () => {
		if (qty <= 1) return;
		setQty(qty - 1);
		props.onQuantityDec(_id, qty - 1);
	};
	console.log(img);

	return (
		<tr>
			<td>
				<div class='cart-info'>
					<img
						style={{ height: "60px", width: "auto" }}
						src={generatePublicUrl(img)}
						alt=''
					/>
					<div>
						<p>{name}</p>
						<span>Price:BDT {price}</span>
						<br />
						<a href='#'>remove</a>
					</div>
				</div>
			</td>
			<td style={{ display: "flex" }}>
				<button
					className='btn btn-danger rounded m-1'
					onClick={onQuantityDecrement}>
					<RemoveCircleOutlineOutlinedIcon />
				</button>

				<input type='number' className='btn-primary rounded m-auto' value={qty} min='1' readOnly />

				<button
					className='btn btn-success rounded m-1'
					onClick={onQuantityIncrement}>
					<AddCircleOutlineIcon />
				</button>
			</td>
			<td>Subtotal:{qty * price}</td>
		</tr>
	);
}
