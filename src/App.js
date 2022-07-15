import "./App.css";
import Router from "./router/Router";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Toaster position="top-right" />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
