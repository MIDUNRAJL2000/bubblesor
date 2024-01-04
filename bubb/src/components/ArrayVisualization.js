// components/ArrayVisualization.js
import React from "react";
import { useSelector } from "react-redux";
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

export default ArrayVisualization;
