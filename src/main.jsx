import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App27 from "./apps/MyApp27.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App27 />
    </Provider>
  </StrictMode>,
);
