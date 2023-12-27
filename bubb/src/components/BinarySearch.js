// import React, { useState } from "react";
// import BinaryVisualization from "./BinaryVisualization";

// function BinarySearch() {
//   const [inputArray, setInputArray] = useState("");
//   const [searchElement, setSearchElement] = useState("");
//   const [resultIndex, setResultIndex] = useState(null);
//   const [searchState, setSearchState] = useState(null);

//   const [executionTime, setExecutionTime] = useState(0);

//   const binarySearch = (arr, target) => {
//     const startTime = performance.now();
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     const searchSteps = [];

//     while (leftIndex <= rightIndex) {
//       const mid = Math.floor((leftIndex + rightIndex) / 2);

//       searchSteps.push({
//         leftIndex,
//         rightIndex,
//         mid,
//       });

//       if (arr[mid] === target) {
//         setResultIndex(mid);
//         setSearchState(searchSteps);
//         return mid;
//       } else if (arr[mid] < target) {
//         leftIndex = mid + 1;
//       } else {
//         rightIndex = mid - 1;
//       }
//     }

//     setResultIndex(-1);
//     setSearchState(searchSteps);
//     const endTime = performance.now();
//     console.log(endTime - startTime);
//     setExecutionTime(endTime - startTime);
//   };

//   const onSearch = () => {
//     const array = inputArray.split(",").map((num) => parseInt(num.trim(), 10));
//     const index = binarySearch(array, parseInt(searchElement, 10));
//     setResultIndex(index);
//   };

//   return (
//     <div className="heading">
//       <h2>Binary search app</h2>
//       <div>
//         <label htmlFor="inputArray">Enter the array</label>
//         <input
//           type="text"
//           id="inputArray"
//           value={inputArray}
//           onChange={(e) => setInputArray(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="searchElement">Enter the value to search</label>
//         <input
//           type="text"
//           id="searchElement"
//           value={searchElement}
//           onChange={(e) => setSearchElement(e.target.value)}
//         />
//       </div>
//       <button onClick={onSearch}>Search the element</button>
//       <div>
//         <span> {inputArray && <h4>Array : {inputArray} </h4>} </span>
//         {searchState && <BinaryVisualization searchState={searchState} />}
//         {resultIndex != null ? (
//           resultIndex !== -1 ? (
//             <>
//               <p className="found">Element found at index: {resultIndex}</p>

//               <p>Execution Time: {executionTime.toFixed(4)} milliseconds</p>
//             </>
//           ) : (
//             <p className="not-found">There is no element found in the array</p>
//           )
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default BinarySearch;

import React, { useState, useEffect } from "react";

function ArrayVisualization({ array, target, currentIndex }) {
  return (
    <div className="array-visualization">
      {array.map((value, index) => (
        <div
          key={index}
          className={`array-element ${index === currentIndex ? "current" : ""}`}
        >
          {value}
          {index === currentIndex && <div className="arrow"></div>}
        </div>
      ))}
      {currentIndex !== null && currentIndex === array.length - 1 && (
        <div className="search-element green">{target}</div>
      )}
    </div>
  );
}

function BinarySearch() {
  const [inputArray, setInputArray] = useState("");
  const [searchElement, setSearchElement] = useState("");
  const [resultIndex, setResultIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    setCurrentIndex(null);
  }, [inputArray]);

  const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
      const mid = Math.floor((leftIndex + rightIndex) / 2);
      setCurrentIndex(mid);

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        leftIndex = mid + 1;
      } else {
        rightIndex = mid - 1;
      }
    }
    return -1;
  };

  const onSearch = () => {
    const array = inputArray.split(",").map((num) => parseInt(num.trim(), 10));
    const target = parseInt(searchElement, 10);
    if (!isNaN(target)) {
      const index = binarySearch(array, target);
      setResultIndex(index);
    } else {
      setResultIndex(null);
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
          onChange={(e) => setInputArray(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="searchElement">Enter the value to search</label>
        <input
          type="text"
          id="searchElement"
          value={searchElement}
          onChange={(e) => setSearchElement(e.target.value)}
        />
      </div>
      <button onClick={onSearch}>Search the element</button>
      <div className="visualization-container">
        <span>
          {inputArray && (
            <ArrayVisualization
              array={inputArray
                .split(",")
                .map((num) => parseInt(num.trim(), 10))}
              target={parseInt(searchElement, 10)}
              currentIndex={currentIndex}
            />
          )}
        </span>
        {resultIndex != null ? (
          resultIndex !== -1 ? (
            <p className="bold">Element found at index: {resultIndex}</p>
          ) : (
            <p>There is no element found in the array</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default BinarySearch;
