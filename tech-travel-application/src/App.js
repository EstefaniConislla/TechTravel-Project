import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routes";
import GlobalStyle from "./Styles/global";
import Header from "./Components/Header";
import { CartContextProvider } from "./Context/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
      <GlobalStyle />
    </CartContextProvider>
  );
}

export default App;
