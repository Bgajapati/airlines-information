import { ActionTypes } from "./actionTypes";

const initialState = {
  airlinesLoading: false,
  airlines: [],
  airlinesErrors: [],
  airlineLoading: false,
  airline: [],
  airlineErrors: [],
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    // List
    case ActionTypes.AIRLINES_GET_LIST:
      state = {
        ...state,
        airlinesLoading: true,
      };
      break;
    case ActionTypes.AIRLINES_GET_LIST_SUCCESS:
      state = {
        ...state,
        airlinesLoading: false,
        airlines: action.payload,
      };
      break;
    case ActionTypes.AIRLINES_GET_LIST_API_ERROR:
      state = {
        ...state,
        airlinesLoading: false,
        airlinesErrors: action.payload,
      };
      break;

    // Details
    case ActionTypes.AIRLINES_GET_AIRLINE:
      state = {
        ...state,
        airlineLoading: true,
      };
      break;
    case ActionTypes.AIRLINES_GET_AIRLINE_SUCCESS:
      state = {
        ...state,
        airlineLoading: false,
        airline: action.payload,
      };
      break;
    case ActionTypes.AIRLINES_GET_AIRLINE_API_ERROR:
      state = {
        ...state,
        airlineLoading: false,
        airlinesErrors: action.payload,
      };
      break;

    // Details
    case ActionTypes.AIRLINES_CREATE:
      state = {
        ...state,
        airlineLoading: true,
        airline: action.payload,
      };
      break;
    case ActionTypes.AIRLINES_CREATE_SUCCESS:
      state = {
        ...state,
        airlineLoading: false,
        airline: action.payload,
      };
      break;
    case ActionTypes.AIRLINES_CREATE_API_ERROR:
      state = {
        ...state,
        airlineLoading: false,
        airlinesErrors: action.payload,
      };
      break;

    default:
      state = { ...state };
  }
  return state;
};

export default Airlines;
