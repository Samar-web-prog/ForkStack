import {combineReducers} from "redux";
import products from "./slices/ProductSlice";
//O Peut mettre toutes les rducers qu'on a déja
const reducers =combineReducers({products});

export default reducers;