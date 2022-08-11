import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostsProvider } from "./contexts/PostsContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styled/global";
import { defaultTheme } from "./styled/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
