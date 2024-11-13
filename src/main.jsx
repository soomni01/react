import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App70 from "./practice/App70.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App70 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
