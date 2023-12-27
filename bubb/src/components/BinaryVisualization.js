// import React from "react";

// function BinaryVisualiztion({ searchState }) {
//   return (
//     <div>
//       {searchState.map((step, index) => (
//         <p key={index}>
//           Iteration {index + 1}: Left Index={step.leftIndex}, Right Index=
//           {step.rightIndex}, Mid Value={step.mid}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default BinaryVisualiztion;

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
