import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import Themes from "./styles/Themes.jsx";
import { Provider } from "react-redux";
import store from "./state/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Themes>
        <App />
      </Themes>
    </Provider>
  </React.StrictMode>
);
