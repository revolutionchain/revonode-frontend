import { API_SUCCESS, API_FAIL, GET_RECENT_USERS, GET_LATEST_TRANSACTION, GET_LATEST_ORDERS } from "./actionTypes";

const INIT_STATE = {
  recentUsers: [],
  latestTransaction: [],
  latestOrders: [],
  loading: true
};

const Dashboard = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_SUCCESS:
      switch (action.payload.actionType) {
        case GET_RECENT_USERS:
          return {
            ...state,
            loading: false,
            recentUsers: action.payload.data,
          };

        case GET_LATEST_TRANSACTION:
          return {
            ...state,
            latestTransaction: action.payload.data,
          };

        case GET_LATEST_ORDERS:
          return {
            ...state,
            latestOrders: action.payload.data,
          };

        default:
          return { ...state };
      }
    case API_FAIL:
      switch (action.payload.actionType) {
        case GET_RECENT_USERS:
          return {
            ...state,
            loading: true,
            recentUsersError: action.payload.error,
          };

        case GET_LATEST_TRANSACTION:
          return {
            ...state,
            latestTransaction: action.payload.error,
          };

        case GET_LATEST_ORDERS:
          return {
            ...state,
            latestOrders: action.payload.error,
          };

        default:
          return { ...state };
      }

    case GET_RECENT_USERS:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default Dashboard;
