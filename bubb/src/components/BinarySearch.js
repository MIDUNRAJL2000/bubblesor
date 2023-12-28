import React, { useState } from "react";
import BinaryVisualization from "./BinaryVisualization";

function ArrayVisualization({ array, currentIndex }) {
  return (
    <div className="array-visualization">
      {array.map((value, index) => (
        <div
          key={index}
          className={`array-element ${index === currentIndex ? "current" : ""}`}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

function BinarySearch() {
  const [inputArray, setInputArray] = useState("");
  const [searchElement, setSearchElement] = useState("");
  const [resultIndex, setResultIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [searchState, setSearchState] = useState([]);

  const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    const steps = [];

    while (leftIndex <= rightIndex) {
      const mid = Math.floor((leftIndex + rightIndex) / 2);
      setCurrentIndex(mid);
      steps.push({
        leftIndex,
        rightIndex,
        mid,
      });

      if (arr[mid] === target) {
        setResultIndex(mid);
        setSearchState(steps);
        return mid;
      } else if (arr[mid] < target) {
        leftIndex = mid + 1;
      } else {
        rightIndex = mid - 1;
      }
    }
    setResultIndex(-1);
    setSearchState(steps);
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
            <>
              <ArrayVisualization
                array={inputArray
                  .split(",")
                  .map((num) => parseInt(num.trim(), 10))}
                currentIndex={currentIndex}
              />
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
