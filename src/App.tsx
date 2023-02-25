import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/root";
import Navbar from "./shared/components/Navbar";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Navbar />

        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
