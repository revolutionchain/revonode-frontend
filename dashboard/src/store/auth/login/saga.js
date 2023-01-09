import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN, START_LOGIN, SUCCESS_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper"

const fireBaseBackend = getFirebaseBackend()


const fetchFunc = ({ url, options }) => {
  console.log(options);
  return fetch(url, options).then(response => response.json());
}


function* startLogin({ payload: { userData, history } }){
  const response = yield call(fetchFunc, {
      url: `http://${window.location.hostname}:3001/login`,
      options: {
         method : 'POST',
         headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
         body : JSON.stringify({user: userData.user, pass: userData.pass})
     }
  }); 
  if(response == true) {
    const jsonResponse = yield response
    yield put({ type: SUCCESS_LOGIN, payload: jsonResponse })
    const res = yield call(postFakeLogin, {
      email: "admin@themesbrand.com",
      password: "123456",
    })
    localStorage.setItem("authUser", JSON.stringify(res))
    yield put(loginSuccess(res))
  history.push("/dashboard")
  } else {
    const jsonResponse = yield response;
    yield put({ type: SUCCESS_LOGIN, payload: jsonResponse })
  }

}


function* loginUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      )
      yield put(loginSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))
    }
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeLatest(START_LOGIN, startLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
