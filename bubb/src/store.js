// store.js
import { configureStore } from "@reduxjs/toolkit";
import binarySearchReducer from "../src/redux/binarySearchSlice";

const store = configureStore({
  reducer: {
    binarySearch: binarySearchReducer,
  },
});

export default store;
