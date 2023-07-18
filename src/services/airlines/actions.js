import { ActionTypes } from "./actionTypes";

// get Airlines
export const getAirlinesList = () => {
  return {
    type: ActionTypes.AIRLINES_GET_LIST,
  };
};

export const getAirlinesListSuccess = (airlines) => {
  return {
    type: ActionTypes.AIRLINES_GET_LIST_SUCCESS,
    payload: airlines,
  };
};

export const getAirlinesListApiError = (errors) => {
  return {
    type: ActionTypes.AIRLINES_GET_LIST_API_ERROR,
    payload: errors,
  };
};

// get Airline details
export const getAirline = (payload) => {
  return {
    type: ActionTypes.AIRLINES_GET_AIRLINE,
    payload: payload,
  };
};

export const getAirlineSuccess = (airlines) => {
  return {
    type: ActionTypes.AIRLINES_GET_AIRLINE_SUCCESS,
    payload: airlines,
  };
};

export const getAirlineApiError = (errors) => {
  return {
    type: ActionTypes.AIRLINES_GET_AIRLINE_API_ERROR,
    payload: errors,
  };
};

// Create  Airline
export const addAirline = (payload) => {
  return {
    type: ActionTypes.AIRLINES_CREATE,
    payload: payload,
  };
};

export const addAirlineSuccess = (airlines) => {
  return {
    type: ActionTypes.AIRLINES_CREATE_SUCCESS,
    payload: airlines,
  };
};

export const addAirlineApiError = (errors) => {
  return {
    type: ActionTypes.AIRLINES_CREATE_API_ERROR,
    payload: errors,
  };
};
