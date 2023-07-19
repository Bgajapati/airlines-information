import { ActionTypes } from "./actionTypes";

const initialState = {
  isAccountLoading: false,
  account: [],
  loginError: [],
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    // List
    case ActionTypes.AIRLINES_ACCOUNT_LOGIN:
      state = {
        ...state,
        isAccountLoading: true,
      };
      break;
    case ActionTypes.AIRLINES_ACCOUNT_LOGIN_SUCCESS:
      state = {
        ...state,
        isAccountLoading: false,
        account: action.payload,
      };
      break;
    case ActionTypes.AIRLINES_ACCOUNT_LOGIN_API_ERROR:

    default:
      state = { ...state };
  }
  return state;
};

export default Airlines;
