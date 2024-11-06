import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App24 from "./practice/App24.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App24 />
    </Provider>
  </StrictMode>,
);
