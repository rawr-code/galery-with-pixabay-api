import React from "react";
import { Route, RouteProps } from "react-router";
import { Redirect } from "react-router-dom";
import { useImgur } from "../context/Imgur/ImgurHooks";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const [state] = useImgur();

  if (!state.token) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
