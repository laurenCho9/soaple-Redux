import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import store from "./redux/store.js";
import TodoAppContainer from "./redux/containers/TodoAppContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoAppContainer />
    </Provider>
  </React.StrictMode>
);
