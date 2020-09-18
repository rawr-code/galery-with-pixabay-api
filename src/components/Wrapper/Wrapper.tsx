import React from "react";
import classes from "./Wrapper.module.scss";

const Wrapper: React.FC = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
