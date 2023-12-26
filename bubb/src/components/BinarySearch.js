import React, { useState } from "react";
import BinaryVisualiztion from "./BinaryVisualization";

function BinarySearch() {
  const [inputArray, setInputArray] = useState("");
  const [searchElement, setSearchElement] = useState("");
  const [resultIndex, setResultIndex] = useState(null);
  const [searchState, setSearchState] = useState(null);

  const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    const searchSteps = [];

    while (leftIndex <= rightIndex) {
      const mid = Math.floor((leftIndex + rightIndex) / 2);

      searchSteps.push({
        leftIndex,
        rightIndex,
        mid,
      });

      if (arr[mid] === target) {
        setResultIndex(mid);
        setSearchState(searchSteps);
        return mid;
      } else if (arr[mid] < target) {
        leftIndex = mid + 1;
      } else {
        rightIndex = mid - 1;
      }
    }

    setResultIndex(-1);
    setSearchState(searchSteps);
    return -1;
  };

  const onSearch = () => {
    const array = inputArray.split(",").map((num) => parseInt(num.trim(), 10));
    const index = binarySearch(array, parseInt(searchElement, 10));
    setResultIndex(index);
  };

  return (
    <div className="heading">
      <h2>Binary search app</h2>
      <div>
        <label htmlFor="inputArray">Enter the array</label>
        <input
          type="text"
          id="inputArray"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="searchElement">Enter the value to search</label>
        <input
          type="text"
          id="searchElement"
          value={searchElement}
          onChange={(e) => setSearchElement(e.target.value)}
        />
      </div>
      <button onClick={onSearch}>Search the element</button>
      <div>
        <span> {inputArray && <h4>Array : {inputArray} </h4>} </span>
        {searchState && <BinaryVisualiztion searchState={searchState} />}
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
