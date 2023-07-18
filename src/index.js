import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

// Index Root component
import AirlinesInformation from "./jsx/AirlinesInformation";

// Store
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AirlinesInformation />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
