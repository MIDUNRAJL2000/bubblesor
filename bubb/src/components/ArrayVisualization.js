import React from "react";
import { useSelector } from "react-redux";

function ArrayVisualization() {
  const {
    inputArray,
    searchElement,
    searchState,
    resultIndex,
    currentIndex,
    time,
  } = useSelector((state) => state.binarySearch);

  const array = inputArray
    ? inputArray.split(",").map((num) => parseInt(num.trim(), 10))
    : [];

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

export default ArrayVisualization;
