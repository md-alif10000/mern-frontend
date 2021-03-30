import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getRecharges } from "../../actions/recharge.action";

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

	const classes = useStyles();
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getRecharges());
     
	// }, []);
	dispatch(getRecharges());
         const user = useSelector((state) => state.user);
					const allRecharge = user.recharges;
	
	

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align='right'>Calories</TableCell>
						<TableCell align='right'>Fat&nbsp;(g)</TableCell>
						<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
					</TableRow>
				</TableHead>
				{/* {console.log("Recharges", allRecharge)} */}
				{/* <TableBody>
					{allRecharge.foreach(recharge => (
						<TableRow key={recharge.number}>
							<TableCell component='th' scope='row'>
								{recharge.number}
							</TableCell>
							<TableCell align='right'>{recharge.amount}</TableCell>
							<TableCell align='right'>{recharge.provider}</TableCell>
							<TableCell align='right'>{recharge.type}</TableCell>
						</TableRow>
					))}
				</TableBody> */}
			</Table>
		</TableContainer>
	);
}
