// import "./App.css";
// import BinarySearch from "./components/BinarySearch";

// function App() {
//   return (
//     <div className="App">
//       <BinarySearch />
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import BinarySearch from "./components/BinarySearch";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BinarySearch />
      </div>
    </Provider>
  );
}

export default App;
