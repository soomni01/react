import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import MyApp80 from "./apps/MyApp80.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp80 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
