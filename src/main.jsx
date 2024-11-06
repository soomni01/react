import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App25 from "./apps/MyApp25.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App25 />
    </Provider>
  </StrictMode>,
);
