import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import MyApp67 from "./apps/MyApp67.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp67 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
