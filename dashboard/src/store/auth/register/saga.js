import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER, USER_REGISTER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeRegister,
  postJwtRegister,
} from "../../../helpers/fakebackend_helper"

// initialize relavant method of both Auth
const fireBaseBackend = getFirebaseBackend()




const fetchFunc = ({ url, options }) => {
  return fetch(url, options).then(response => response.json());
}


function* userRegister({ payload: { userData, history } }){
  let url;
  if((window.location.hostname).includes("revo.host")){
    url = `https://${window.location.hostname}/api`
  }else {
    url = `http://${window.location.hostname}:3001`
  }
  const response = yield call(fetchFunc, {
      url: `${url}/register`,
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
    setTimeout(() => {
        history.push("/login");
    }, "5000")
  } else {/*
    const jsonResponse = yield response;
    yield put({ type: SUCCESS_LOGIN, payload: jsonResponse })*/
  }

}




// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.registerUser,
        user.email,
        user.password
      )
      yield put(registerUserSuccessful(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtRegister, "/post-jwt-register", user)
      yield put(registerUserSuccessful(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response = yield call(postFakeRegister, user)
      yield put(registerUserSuccessful(response))
    }
  } catch (error) {
    yield put(registerUserFailed(error))
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser)
  yield takeEvery(USER_REGISTER, userRegister)
}

function* accountSaga() {
  yield all([fork(watchUserRegister)])
}

export default accountSaga
