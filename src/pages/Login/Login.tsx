import React from "react";
import "./Login.scss";
import { imgurLoginUrl } from "../../constants/imgurConstants";

export const Login: React.FC = () => {
  const redirect = () => {
    window.location.href = imgurLoginUrl;
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <button className="login-button" onClick={redirect}>
          LOGIN WITH IMGUR
        </button>
      </div>
    </div>
  );
};
