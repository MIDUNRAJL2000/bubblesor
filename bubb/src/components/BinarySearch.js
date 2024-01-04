// // import React, { useState } from "react";
// // import BinaryVisualization from "./BinaryVisualization";

// // function ArrayVisualization({ array, currentIndex }) {
// //   return (
// //     <div className="array-visualization">
// //       {array.map((value, index) => (
// //         <div
// //           key={index}
// //           className={`array-element ${index === currentIndex ? "current" : ""}`}
// //         >
// //           {value}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // function BinarySearch() {
// //   const [inputArray, setInputArray] = useState("");
// //   const [searchElement, setSearchElement] = useState("");
// //   const [resultIndex, setResultIndex] = useState(null);
// //   const [currentIndex, setCurrentIndex] = useState(null);
// //   const [searchState, setSearchState] = useState([]);
// //   const [time, setTime] = useState(null);

// //   const binarySearch = async (arr, target) => {
// //     let leftIndex = 0;
// //     let rightIndex = arr.length - 1;
// //     const steps = [];
// //     const startTime = performance.now();

// //     while (leftIndex <= rightIndex) {
// //       const mid = Math.floor((leftIndex + rightIndex) / 2);
// //       setCurrentIndex(mid);
// //       steps.push({
// //         leftIndex,
// //         rightIndex,
// //         mid,
// //       });
// //       setTime(performance.now() - startTime);

// //       await new Promise((resolve) => setTimeout(resolve, 500));

// //       if (arr[mid] === target) {
// //         setResultIndex(mid);
// //         setSearchState(steps);
// //         return mid;
// //       } else if (arr[mid] < target) {
// //         leftIndex = mid + 1;
// //       } else {
// //         rightIndex = mid - 1;
// //       }
// //     }
// //     setResultIndex(-1);
// //     setSearchState(steps);
// //     return -1;
// //   };

// //   const onSearch = async () => {
// //     const array = inputArray.split(",").map((num) => parseInt(num.trim(), 10));
// //     const target = parseInt(searchElement, 10);
// //     const startTime = performance.now();

// //     if (!isNaN(target)) {
// //       const index = await binarySearch(array, target);
// //       const endTime = performance.now();
// //       setResultIndex(index);
// //       setTime(endTime - startTime);
// //     } else {
// //       setResultIndex(null);
// //     }
// //   };

// //   return (
// //     <div className="binary-search-container">
// //       <h2>Binary search app</h2>
// //       <div className="input-container">
// //         <label htmlFor="inputArray">Enter the array</label>
// //         <input
// //           type="text"
// //           id="inputArray"
// //           value={inputArray}
// //           onChange={(e) => setInputArray(e.target.value)}
// //         />
// //       </div>
// //       <div className="input-container">
// //         <label htmlFor="searchElement">Enter the value to search</label>
// //         <input
// //           type="text"
// //           id="searchElement"
// //           value={searchElement}
// //           onChange={(e) => setSearchElement(e.target.value)}
// //         />
// //       </div>
// //       <button onClick={onSearch}>Search the element</button>
// //       {time !== null && (
// //         <div
// //           style={{
// //             border: "1px solid black",
// //             padding: "5px",
// //             height: "50px",
// //             width: "auto",
// //           }}
// //         >
// //           Time: {time.toFixed(2)} milliseconds
// //         </div>
// //       )}
// //       <div className="visualization-container">
// //         <span>
// //           {inputArray && (
// //             <>
// //               <ArrayVisualization
// //                 array={inputArray
// //                   .split(",")
// //                   .map((num) => parseInt(num.trim(), 10))}
// //                 currentIndex={currentIndex}
// //               />
// //               <BinaryVisualization searchState={searchState} />
// //             </>
// //           )}
// //         </span>
// //         {resultIndex != null ? (
// //           resultIndex !== -1 ? (
// //             <p className="found">Element found at index: {resultIndex}</p>
// //           ) : (
// //             <p className="not-found">There is no element found in the array</p>
// //           )
// //         ) : null}
// //       </div>
// //     </div>
// //   );
// // }

// // export default BinarySearch;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputArray,
  setSearchElement,
  setResultIndex,
  setCurrentIndex,
  setSearchState,
  setTime,
  resetBinarySearch,
} from "../redux/binarySearchSlice";
import BinaryVisualization from "../components/BinaryVisualization";
import ArrayVisualization from "./ArrayVisualization";

function BinarySearch() {
  const dispatch = useDispatch();
  const {
    inputArray,
    searchElement,
    searchState,
    resultIndex,
    currentIndex,
    time,
  } = useSelector((state) => state.binarySearch);

  const binarySearch = async (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    const steps = [];
    const startTime = performance.now();

    while (leftIndex <= rightIndex) {
      const mid = Math.floor((leftIndex + rightIndex) / 2);
      dispatch(setCurrentIndex(mid));
      steps.push({
        leftIndex,
        rightIndex,
        mid,
      });
      dispatch(setSearchState([...steps]));
      dispatch(setTime(performance.now() - startTime));

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (arr[mid] === target) {
        dispatch(setResultIndex(mid));
        return mid;
      } else if (arr[mid] < target) {
        leftIndex = mid + 1;
      } else {
        rightIndex = mid - 1;
      }
    }
    dispatch(setResultIndex(-1));
    dispatch(setSearchState([...steps]));
    return -1;
  };

  const onSearch = async (e) => {
    e.preventDefault();
    const array = inputArray.split(",").map((num) => parseInt(num.trim(), 10));
    const target = parseInt(searchElement, 10);

    if (!isNaN(target)) {
      const startTime = performance.now();
      const index = await binarySearch(array, target);
      const endTime = performance.now();
      dispatch(setResultIndex(index));
      dispatch(setTime(endTime - startTime));
    }
  };

  return (
    <div className="binary-search-container">
      <h2>Binary search app</h2>
      <div className="input-container">
        <label htmlFor="inputArray">Enter the array</label>
        <input
          type="text"
          id="inputArray"
          value={inputArray}
          onChange={(e) => dispatch(setInputArray(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="searchElement">Enter the value to search</label>
        <input
          type="text"
          id="searchElement"
          value={searchElement}
          onChange={(e) => dispatch(setSearchElement(e.target.value))}
        />
      </div>
      <button onClick={(e) => onSearch(e)}>Search the element</button>
      {time !== null && (
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            height: "50px",
            width: "auto",
          }}
        >
          Time: {time.toFixed(2)} milliseconds
        </div>
      )}
      <div className="visualization-container">
        <span>
          {inputArray && (
            <>
              <ArrayVisualization />
              <BinaryVisualization searchState={searchState} />
            </>
          )}
        </span>
        {resultIndex != null ? (
          resultIndex !== -1 ? (
            <p className="found">Element found at index: {resultIndex}</p>
          ) : (
            <p className="not-found">There is no element found in the array</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default BinarySearch;
