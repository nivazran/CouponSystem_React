import { combineReducers, createStore } from "redux";
import { couponsReducer } from "./CouponsState";

const reducers = combineReducers({couponState: couponsReducer});
const store = createStore(reducers)

// For getting data
//const xyz = store.getState().catState.cats;

export default store;
