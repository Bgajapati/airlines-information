import { ActionTypes } from "./actionTypes";

// get Airlines
export const accountLogin = () => {
  return {
    type: ActionTypes.AIRLINES_ACCOUNT_LOGIN,
  };
};

export const accountLoginSuccess = (airlines) => {
  return {
    type: ActionTypes.AIRLINES_ACCOUNT_LOGIN_SUCCESS,
    payload: airlines,
  };
};

export const accountLoginApiError = (errors) => {
  return {
    type: ActionTypes.AIRLINES_ACCOUNT_LOGIN_API_ERROR,
    payload: errors,
  };
};
