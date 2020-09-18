import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import { ImgurProvider } from "./context/Imgur/ImgurContext";
import { Login } from "./pages/Login/Login";
import LoginCallback from "./pages/LoginCallback";

interface Props {
  message: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <ImgurProvider>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={LoginCallback} />
        <ProtectedRoute path="/card" exact component={CardContainer} />
      </BrowserRouter>
    </ImgurProvider>
  );
};

export default App;
