import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App30 from "./apps/MyApp30.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App30 />
    </Provider>
  </StrictMode>,
);
