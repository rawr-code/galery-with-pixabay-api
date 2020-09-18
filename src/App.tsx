import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ImgurProvider } from "./context/Imgur/ImgurContext";
import Home from "./pages/Home";

import "./App.css";

interface Props {
  message: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </ImgurProvider>
  );
};

export default App;
