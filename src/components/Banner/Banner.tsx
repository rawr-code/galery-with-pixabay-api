import React from "react";
import classes from "./Banner.module.scss";

interface Props {
  title: string;
  description: string;
}

const Banner: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={classes.banner}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default Banner;
