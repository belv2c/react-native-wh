import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../screens/WeekOverview/reducer";

export default combineReducers({
  form: formReducer,
  homeReducer
});
