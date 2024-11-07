import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App28 from "./apps/MyApp28.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App28 />
    </Provider>
  </StrictMode>,
);
