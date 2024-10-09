import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/Default";
import { GlobalStyle } from "./styles/Global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GitContextProvider } from "./context/GitContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitContextProvider>
          <Router />
        </GitContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
