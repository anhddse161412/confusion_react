import { createStore } from "redux";
import { Reducer } from "./Reducer";

export const configureStore = () => {
   const store = createStore(Reducer);
   return store;
};
