import "./App.css";
import Router from "./router/Router";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ToastContainer />
          <Router />
        </div>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
