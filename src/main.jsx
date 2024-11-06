import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp10 from "./apps/MyApp10.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp10 />
  </StrictMode>,
);
