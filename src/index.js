import React, { StrictMode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactDOM from "react-dom";

import App from "./App";

const client = new QueryClient();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
