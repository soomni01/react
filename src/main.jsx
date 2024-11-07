import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App33 from "./practice/App33.jsx";
import { Provider } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App33 />
    </Provider>
  </StrictMode>,
);
