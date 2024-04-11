import type { ReactElement } from "react";
import { AppRoutes } from "@/routes";

// Styles
import "@/App.css";

function App(): ReactElement {
  return (
    <main>
      <AppRoutes />
    </main>
  );
}

export default App;
