import "./App.css";
import Router from "./router/Router";
import theme from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Toaster
          position="top-right"
          toastOptions={{
            // Define default options

            // style: {
            //   marginTop: "2.5rem",
            // },
            error: {
              icon: "❗",
            },
            success: {
              style: {
                fontSize: "1rem",
              },
            },
          }}
        />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
