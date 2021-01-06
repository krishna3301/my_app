import { createStore } from "redux";
import userReducer from "./reducer/userReducer";

const store = createStore(userReducer);

//console.log(store.getState())

export default store;
