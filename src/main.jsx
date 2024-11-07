import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App29 from "./apps/MyApp29.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App29 />
    </Provider>
  </StrictMode>,
);
