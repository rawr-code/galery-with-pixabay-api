import React from "react";
import classes from "./Header.module.scss";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className={classes.header}>
      <h3 className={classes.title}>{title}</h3>
    </header>
  );
};

export default Header;
