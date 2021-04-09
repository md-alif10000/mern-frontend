import React,{useState} from "react";
import {useDispatch,useSelector} from 'react-redux'

import { Button } from "@material-ui/core";
import PinDropIcon from "@material-ui/icons/PinDrop";
import "./style.css";
import Header from "../../../components/Header/index";
import { getSearchedTicket } from "../../../actions/ticket.action";



export default function AllTicket() {
	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')
	const dispatch = useDispatch()
	const ticket = useSelector(state => state.ticket)

	const findSearchedTicket=(e)=>{
		e.preventDefault()
		console.log({from ,to})
		dispatch(getSearchedTicket({from,to}))
	}


	return (
		<>
			<Header />
			<div className='container'>
				<div className='row'>
					<div className=''>
						<div className='row sa ticketSearchContainer'>
							<div className='col-lg-4 col-sm-12 m-2 text-center d-flex'>
								<PinDropIcon />
								<select
									className='form-select p-2 m-2 text-lg'
									aria-label='Default select example'
									onChange={(e) => setFrom(e.target.value)}>
									<option selected>Open this select menu</option>
									<option value='ashulia'>Ashulia</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</select>
							</div>
							<div className='col-lg-4 col-sm-12 m-2 text-center d-flex'>
								<PinDropIcon />
								<select
									className='form-select p-2 m-2 text-lg'
									aria-label='Default select example'
									onChange={(e) => setTo(e.target.value)}>
									<option selected>Open this select menu</option>
									<option value='mymensingh'>mymensingh</option>
									<option value='2'>Two</option>
									<option value='3'>Three</option>
								</select>
							</div>
							<Button
								className='ticketSearchButton c-primary'
								onClick={(e) => findSearchedTicket(e)}
								style={{ backgroundColor: "#fce00d", borderRadius: "30px" }}>
								<h3>Find Ticket</h3>
							</Button>
						</div>
					</div>
				</div>

				<div>
					<h1>Available Tickets</h1>
				</div>
			</div>

			<div className='container'>
				<div className='row'>
					{ticket.tickets.map((ticket) => (
						<div
							className='col-lg-4 col-sm-12 col-md-6 m-3 p-3 '
							key={ticket._id}>
							<div className='card bg-primary text-white p-3'>
								<p>{ticket.title}</p>
								<div className=''>
									<p> Your ticket</p>
									<p>Coach: ENA</p>
									<p className='d-flex justify-content-between'>
										<span className='m-2'>From:{ticket.from}</span>
										<span>TO:{ticket.to}</span>
									</p>
									<div>
										<span className='btn-secondary p-2 rounded-pill '>
											{ticket.status}
										</span>{" "}
										<span>
											{ticket.ac ? (
												<span className='btn-info rounded-pill p-1'>AC</span>
											) : (
												<span className='rounded-pill btn-danger p-1'>
													Non AC
												</span>
											)}
										</span>
									</div>
								</div>
								<div
									className='d-flex m-2'
									style={{ justifyContent: "space-between" }}>
									<span className='btn-success p-1 m-1'>{ticket.price}Tk</span>
									<button className='btn btn-primary btn-lg'>Book</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
