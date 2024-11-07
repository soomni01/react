import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyApp34 from "./apps/MyApp35.jsx";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <MyApp34 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
