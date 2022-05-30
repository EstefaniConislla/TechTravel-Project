import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
