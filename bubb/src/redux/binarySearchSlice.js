import { createSlice } from "@reduxjs/toolkit";

const binarySearchSlice = createSlice({
  name: "binarySearch",
  initialState: {
    inputArray: "",
    searchElement: "",
    resultIndex: null,
    currentIndex: null,
    searchState: [],
    time: null,
  },
  reducers: {
    setInputArray: (state, action) => {
      state.inputArray = action.payload;
    },
    setSearchElement: (state, action) => {
      state.searchElement = action.payload;
    },
    setResultIndex: (state, action) => {
      state.resultIndex = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    setSearchState: (state, action) => {
      state.searchState = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    resetBinarySearch: (state) => {
      state.inputArray = "";
      state.searchElement = "";
      state.resultIndex = null;
      state.currentIndex = null;
      state.searchState = [];
      state.time = null;
    },
  },
});

export const {
  setInputArray,
  setSearchElement,
  setResultIndex,
  setCurrentIndex,
  setSearchState,
  setTime,
  resetBinarySearch,
} = binarySearchSlice.actions;

export default binarySearchSlice.reducer;
