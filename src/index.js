import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Reddit from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Reddit />
  </StrictMode>
);
