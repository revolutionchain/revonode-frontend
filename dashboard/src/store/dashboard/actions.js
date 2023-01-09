import { API_SUCCESS, API_FAIL, GET_RECENT_USERS, GET_LATEST_TRANSACTION, GET_LATEST_ORDERS } from "./actionTypes";

export const apiSuccess = (actionType, data) => ({
  type: API_SUCCESS,
  payload: { actionType, data },
});

export const apiFail = (actionType, error) => ({
  type: API_FAIL,
  payload: { actionType, error },
});

// recenet users
export const getRecentUsers = () => ({
  type: GET_RECENT_USERS
});

// latest transaction
export const getLatestTransaction = () => ({
  type: GET_LATEST_TRANSACTION
});

// latest order
export const getLatestOrders = () => ({
  type: GET_LATEST_ORDERS
});
