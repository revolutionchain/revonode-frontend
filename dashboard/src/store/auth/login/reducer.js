import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  START_LOGIN,
  SUCCESS_LOGIN
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  isLogged: false,
  userTyped: {}
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
      }
      break
    case LOGOUT_USER:
      state = { ...state }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
    case START_LOGIN:
      state = { ...state, userTyped: action.payload.userData }
      break
    case SUCCESS_LOGIN:
      state = { ...state, isLogged: action.payload }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
