import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Header from "../../components/Header/index";
	import { Redirect } from "react-router-dom";

import { generatePublicUrl } from "../../urlconfig";
import "./style2.css";

export default function OrderPage2(props) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const auth = useSelector(state => state.auth)

	useEffect(() => {
		dispatch(getOrders());
	}, []);

    const getStatus=(order)=>{
        const status=order.orderStatus.reverse().filter(status=>{
             return (status.isCompleted = true);

        }
       
        )

        return status[status.length -1].type
    }
	if (!auth.authenticate) return <Redirect to='/' />;
	return (
		<>
		<Header fixed/>
		<div className=' tableContainer'>
			<table class='table table-striped table-dark'>
				<thead>
					<tr>
						<th scope='col'>No</th>
						<th scope='col'>Product Name</th>
						<th scope='col'>Payment Method</th>
						<th scope='col'>Order Status</th>

						<th scope='col'>Total Amount</th>
					</tr>
				</thead>
				<tbody>
					{user.orders.map((order, index) => {
						return (
							<tr>
								<td>{index}</td>

								{/* <th scope='row'>1</th> */}

								<td>
									{order.items.map((item, index) => {
										return (
											<Link
												to={`/order_details/${order._id}`}
												style={{ textDecoration: "none" }}>
												<div style={{ display: "flex" }}>
													<span>({index + 1})-</span>
													<img
														className='orderImg'
														src={generatePublicUrl(
															item.productId.productPictures[0].img
														)}
													/>
													{item.productId.name} <br />
												</div>
											</Link>
										);
									})}
								</td>
								<td>{order.paymentType}</td>
								<td>
                                  {getStatus(order)}
                                
                                    
                                  </td>

								{console.log(order)}
								<td>
									{order.items.map((item, index) => {
										return <p>*{item.payablePrice}</p>;
									})}
									Total Price=
									{Object.keys(order.items).reduce((totalPrice, key) => {
										const { payablePrice } = order.items[key];
										return totalPrice + payablePrice;
									}, 0)}
								</td>
							</tr>
						);
					})}
					{/* <tr>
							<th scope='row'>1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						{user.orders.map((order) => {
							return order.items.map((item) => (
								<Card style={{ display: "block", margin: "5px 0" }}>
									<Link
										to={`/order_details/${order._id}`}
										className='orderItemContainer'>
										<div className='orderImgContainer'>
											<img
												className='orderImg'
												src={generatePublicUrl(
													item.productId.productPictures[0].img
												)}
											/>
										</div>
										<div className='orderRow'>
											<div
												style={{ textDecoration: "none" }}
												className='orderName'>
												{item.productId.name}
											</div>
											<div className='orderPrice'>
												<BiRupee style={{ textDecoration: "none" }} />
												{item.payablePrice}
											</div>
											<div>{order.paymentStatus}</div>
										</div>
									</Link>
								</Card>
							));
						})} */}
				</tbody>
			</table>
		</div>
		</>
	);
}
