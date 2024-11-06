import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp5 from "./apps/MyApp5.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp5 />
  </StrictMode>,
);
