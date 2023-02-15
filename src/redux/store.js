import { createStore, useDispatch, combineReducers } from "redux";
import  apiSlice  from "./apiSlice";


const reducer = combineReducers({
    apiKey: apiSlice.reducer
    //add'l reducers go here
});


const store = createStore(reducer);
console.log(store.getState());


export default store;
