import { Redirect } from "react-router-dom";
import axios from "../helpers/axios";
import { authConstants, cartConstants } from "./constants";
import Swal from "sweetalert2";

export const login = (user) => {
	return async (dispatch) => {
		dispatch({ type: authConstants.LOGIN_REQUEST });
		const res = await axios.post("/login", {
			...user,
		});

		if (res.status === 200) {
			const { token, user } = res.data;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
			dispatch({
				type: authConstants.LOGIN_SUCCESS,
				payload: {
					token,
					user,
				},
			});
			Swal.fire("Wow..", "Login Successful..!", "success");
		} else {
			if (res.status === 400) {
				dispatch({
					type: authConstants.LOGIN_FAILURE,
					payload: { error: res.data.error },
				});
				Swal.fire("Oops...", "Something went wrong!", "error");
			}
		}
	};
};

export const register = (user) => {
	return async (dispatch) => {
		dispatch({ type: authConstants.REGISTER_REQUEST });
		const res = await axios.post("/register", 
			user
		);

		if (res.status === 201) {
			const { token, user } = res.data;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(user));
			dispatch({
				type: authConstants.REGISTER_SUCCESS,
				payload: {
					token,
					user,
				},
			});
			Swal.fire("Wow.", "Register Successful.!", "success");
		} else {
			if (res.status === 400) {
				dispatch({
					type: authConstants.REGISTER_FAILURE,
					payload: { error: res.data.error },
				});
				Swal.fire("Oops...", "Something went wrong!", "error");
			}
		}
	};
};

export const isUserLoggedIn = () => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = JSON.parse(localStorage.getItem("user"));
			dispatch({
				type: authConstants.REGISTER_SUCCESS,
				payload: {
					token,
					user,
				},
			});
		} else {
			dispatch({
				type: authConstants.LOGIN_FAILURE,
				payload: { error: "Failed to Login" },
			});
		}
	};
};

export const logout = () => {
	return async (dispatch) => {
		dispatch({
			type: authConstants.LOGOUT_REQUEST,
		});
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		dispatch({
			type: authConstants.LOGOUT_SUCCESS,
		});

		<Redirect to='/' />;
		Swal.fire("Great..", "Logout Successful..!", "success");
		dispatch({
			type: cartConstants.RESET_CART,
		});

		// const res = await axios.post("/logout");
		// if (res.status === 200) {
		// 	localStorage.clear();
		// 	dispatch({
		// 		type: authConstants.LOGOUT_SUCCESS,
		// 	});
		// } else {
		// 	dispatch({
		// 		type: authConstants.LOGOUT_FAILURE,
		// 		payload: { error: res.data.error },
		// 	});
		// }
	};
};
