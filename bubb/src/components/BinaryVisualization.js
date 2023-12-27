import React from "react";

function BinaryVisualization({ searchState }) {
  return (
    <div className="visualization-container">
      {searchState.map((step, index) => (
        <div key={index} className="iteration-box">
          <div className="box left-box">
            <p>Left Index: {step.leftIndex}</p>
          </div>
          <div className="box mid-box">
            <p>Mid Value: {step.mid}</p>
          </div>
          <div className="box right-box">
            <p>Right Index: {step.rightIndex}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BinaryVisualization;
