import {configureStore} from "@reduxjs/toolkit";
//Appel des reducers
import reducers from "./Reducer";
export default configureStore({
    reducer:reducers

})