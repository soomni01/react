import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App31 from "./apps/MyApp31.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App31 />
    </Provider>
  </StrictMode>,
);
