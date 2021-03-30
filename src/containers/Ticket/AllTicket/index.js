import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import PinDropIcon from "@material-ui/icons/PinDrop";
import "./style.css";
import Header from "../../../components/Header/index";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 300,
	},
}));

export default function AllTicket() {
	const classes = useStyles();

	return (
		<>
		<Header/>
		<div className='container'>
			<div className='row'>
				<div className=''>
					<div className='row sa ticketSearchContainer'>
						<div className='col-lg-4 col-sm-12 m-2 text-center'>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='grouped-native-select'>
									<PinDropIcon />
									From
								</InputLabel>
								<Select native defaultValue='' id='grouped-native-select'>
									<option aria-label='None' value='' />
									<optgroup label='Category 1'>
										<option value={1}>Option 1</option>
										<option value={2}>Option 2</option>
									</optgroup>
									<optgroup label='Category 2'>
										<option value={3}>Option 3</option>
										<option value={4}>Option 4</option>
									</optgroup>
								</Select>
							</FormControl>
						</div>
						<div className='col-lg-4 col-sm-12 m-2 text-center'>
							<FormControl className={classes.formControl}>
								<InputLabel htmlFor='grouped-native-select'>
									<PinDropIcon /> To
								</InputLabel>
								<Select native defaultValue='' id='grouped-native-select'>
									<option aria-label='None' value='' />
									<optgroup label='Category 1'>
										<option value={1}>Option 1</option>
										<option value={2}>Option 2</option>
									</optgroup>
									<optgroup label='Category 2'>
										<option value={3}>Option 3</option>
										<option value={4}>Option 4</option>
									</optgroup>
								</Select>
							</FormControl>
						</div>
						<Button
							className='ticketSearchButton c-primary'
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
		</>
	);
}
