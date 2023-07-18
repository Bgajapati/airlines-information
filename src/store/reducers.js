import { combineReducers } from "redux";

// Reducers
import Airlines from "../services/airlines/reducer";

const rootReducer = combineReducers({ airlines: Airlines });

export default rootReducer;
