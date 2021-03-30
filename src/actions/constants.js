export const authConstants = {
	LOGIN_REQUEST: "LOGIN_REQUEST",
	LOGIN_FAILURE: " LOGIN_FAILURE",
	LOGIN_SUCCESS: "LOGIN_SUCCESS",

	REGISTER_REQUEST: "REGISTER_REQUEST",
	REGISTER_FAILURE: " REGISTER_FAILURE",
	REGISTER_SUCCESS: "REGISTER_SUCCESS",

	LOGOUT_REQUEST: "LOGOUTREQUEST",
	LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
	LOGOUT_FAILURE: "LOGOUT_FAILURE",
};

export const categoryConstants = {
	GET_ALL_CATEGORIES_REQUEST: "GET_ALL_CATEGORIES_REQUEST",
	GET_ALL_CATEGORIES_SUCCESS: "GET_ALL_CATEGORIES_SUCCESS",
	GET_ALL_CATEGORIES_FAILURE: "GET_ALL_CATEGORIES_FAILURE:",
	ADD_NEW_CATEGORY_REQUEST: "ADD_NEW_CATEGORY_REQUEST",
	ADD_NEW_CATEGORY_SUCCESS: "ADD_NEW_CATEGORY_SUCCESS",
	ADD_NEW_CATEGORY_FAILURE: "ADD_NEW_CATEGORY_FAILURE",

	GET_SUB_CATEGORY_REQUEST: "GET_SUB_CATEGORY_REQUEST",
	GET_SUB_CATEGORY_SUCCESS: "GET_SUB_CATEGORY_SUCCESS",
	GET_SUB_CATEGORY_FAILURE: "GET_SUB_CATEGORY_FAILURE",
};

export const productConstants = {
	GET_PRODUCTS_BY_SLUG: "GET_PRODUCTS_BY_SLUG",
	GET_PRODUCT_PAGE_REQUEST: "GET_PRODUCT_PAGE_REQUEST",
	GET_PRODUCT_PAGE_SUCCESS: "GET_PRODUCT_PAGE_SUCCESS",
	GET_PRODUCT_PAGE_FAILURE: "GET_PRODUCT_PAGE_FAILURE",

	GET_PRODUCT_DETAILS_BY_ID_REQUEST: "GET_PRODUCT_DETAILS_BY_ID_REQUEST",
	GET_PRODUCT_DETAILS_BY_ID_SUCCESS: "GET_PRODUCT_DETAILS_BY_ID_SUCCESS",
	GET_PRODUCT_DETAILS_BY_ID_FAILURE: "GET_PRODUCT_DETAILS_BY_ID_FAILURE",

	GET_ALL_PRODUCTS_REQUEST: "GET_ALL_PRODUCTS_REQUEST",
	GET_ALL_PRODUCTS_SUCCESS: "GET_ALL_PRODUCTS_SUCCESS",
	GET_ALL_PRODUCTS_FAILURE: "GET_ALL_PRODUCTS_FAILURE",

	ADD_REVIEW_REQUEST: "ADD_REVIEW_REQUEST",
	ADD_REVIEW_SUCCESS: "ADD_REVIEW_SUCCESS",
	ADD_REVIEW_FAILURE: "ADD_REVIEW_FAILURE",
};

export const cartConstants = {
	ADD_TO_CART: "ADD_TO_CART",
	DECREASE_CART: "DECREASE_CART",
	ADD_TO_CART_REQUEST: "Add_TO_CART_REQUEST",
	ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
	ADD_TO_CART_FAILURE: "ADD_TO_CART_FAILURE",
	RESET_CART: "RESET_CART",

	REMOVE_CART_ITEM_REQUEST: "REMOVE_CART_ITEM_REQUEST",
	REMOVE_CART_ITEM_SUCCESS: "REMOVE_CART_ITEM_SUCCESS",
	REMOVE_CART_ITEM_FAILURE: "REMOVE_CART_ITEM_FAILURE",
};

export const userConstants = {
	GET_USER_ADDRESS_REQUEST: "GET_USER_ADDRESS_REQUEST",
	GET_USER_ADDRESS_SUCCESS: "GET_USER_ADDRESS_SUCCESS",
	GET_USER_ADDRESS_FAILURE: "GET_USER_ADDRESS_FAILURE",
	ADD_USER_ADDRESS_REQUEST: "ADD_USER_ADDRESS_REQUEST",
	ADD_USER_ADDRESS_SUCCESS: "ADD_USER_ADDRESS_SUCCESS",
	ADD_USER_ADDRESS_FAILURE: "ADD_USER_ADDRESS_FAILURE",
	ADD_USER_ORDER_REQUEST: "ADD_USER_ORDER_REQUEST",
	ADD_USER_ORDER_SUCCESS: "ADD_USER_ORDER_SUCCESS",
	ADD_USER_ORDER_FAILURE: "ADD_USER_ORDER_FAILURE",

	GET_USER_ORDER_REQUEST: "GET_USER_ORDER_REQUEST",
	GET_USER_ORDER_SUCCESS: "GET_USER_ORDER_SUCCESS",
	GET_USER_ORDER_FAILURE: "GET_USER_ORDER_FAILURE",
	
	GET_USER_ORDER_DETAILS_REQUEST: "GET_USER_ORDER_DETAILS_REQUEST",
	GET_USER_ORDER_DETAILS_SUCCESS: "GET_USER_ORDER_DETAILS_SUCCESS",
	GET_USER_ORDER_DETAILS_FAILURE: "GET_USER_ORDER_DETAILS_FAILURE",
};



export const rechargeConstants = {
	RECHARGE_REQUEST: "RECHARGE_REQUEST",
	RECHARGE_SUCCESS: "RECHARGE_SUCCESS",
	RECHARGE_FAILURE: "RECHARGE_FAILURE",

	GET_RECHARGES_REQUEST: "GET_RECHARGES_REQUEST",
	GET_RECHARGES_SUCCESS: "GET_RECHARGES_SUCCESS",
	GET_RECHARGES_FAILURE: "GET_RECHARGES_FAILURE",
};