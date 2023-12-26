import React from "react";

function BinaryVisualiztion({ searchState }) {
  return (
    <div>
      {searchState.map((step, index) => (
        <p key={index}>
          Iteration {index + 1}: Left Index={step.leftIndex}, Right Index=
          {step.rightIndex}, Mid Value={step.mid}
        </p>
      ))}
    </div>
  );
}

export default BinaryVisualiztion;
