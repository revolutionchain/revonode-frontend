import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import { GET_RECENT_USERS, GET_LATEST_TRANSACTION, GET_LATEST_ORDERS } from "./actionTypes";
import { apiSuccess, apiFail } from "./actions";

//Include Both Helper File with needed methods
import {
  getRecentUsers as getRecentUsersApi,
  getLatestTransaction as getLatestTransactionApi,
  getLatestOrders as getLatestOrdersApi
}
  from "../../helpers/fakebackend_helper";

function* getRecentUsers() {
  try {
    const response = yield call(getRecentUsersApi);
    yield put(apiSuccess(GET_RECENT_USERS, response));
  } catch (error) {
    yield put(apiFail(GET_RECENT_USERS, error));
  }
}

function* getLatestTransaction() {
  try {
    const response = yield call(getLatestTransactionApi);
    yield put(apiSuccess(GET_LATEST_TRANSACTION, response));
  } catch (error) {
    yield put(apiFail(GET_LATEST_TRANSACTION, error));
  }
}

function* getLatestOrders() {
  try {
    const response = yield call(getLatestOrdersApi);
    yield put(apiSuccess(GET_LATEST_ORDERS, response));
  } catch (error) {
    yield put(apiFail(GET_LATEST_ORDERS, error));
  }
}

export function* watchGetRecentUsers() {
  yield takeEvery(GET_RECENT_USERS, getRecentUsers);
}
export function* watchLatestTransaction() {
  yield takeEvery(GET_LATEST_TRANSACTION, getLatestTransaction);
}
export function* watchLatestOrders() {
  yield takeEvery(GET_LATEST_ORDERS, getLatestOrders);
}

function* dashboardSaga() {
  yield all([fork(watchGetRecentUsers)]);
  yield all([fork(watchLatestTransaction)]);
  yield all([fork(watchLatestOrders)]);
}

export default dashboardSaga;
