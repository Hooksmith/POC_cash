import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routes";
import ThemeConfig from "./theme";

function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>{renderRoutes()}</BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
