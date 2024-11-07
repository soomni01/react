import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App32 from "./apps/MyApp32.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App32 />
    </Provider>
  </StrictMode>,
);
