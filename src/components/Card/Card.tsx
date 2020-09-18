import React from "react";
import ClassNames from "../../utils/classNames";
import classes from "./Card.module.scss";

interface Props {
  title: string;
  info: string;
  description?: string;
  slider?: boolean;
}

const Card: React.FC<Props> = ({
  title,
  info,
  description,
  slider,
  children,
}) => {
  return (
    <div
      className={ClassNames({
        [classes.card]: true,
        [classes.padding]: !slider,
        [classes.slider]: !!slider,
      })}
    >
      <header
        className={ClassNames({
          [classes.header]: true,
          [classes.dark]: !!slider,
        })}
      >
        <div className={classes.titleWrapper}>
          {slider && (
            <div className={classes.circleWrapper}>
              <div className={classes.circle} />
            </div>
          )}
          <h2 className={classes.title}>{title}</h2>
        </div>
        <p className={classes.info}>{info}</p>
      </header>
      <div
        className={ClassNames({
          [classes.contentWrapper]: !!slider,
        })}
      >
        {description && (
          <p
            className={ClassNames({
              [classes.description]: !slider,
              [classes.slideInfo]: !!slider,
            })}
          >
            {description}
          </p>
        )}
        {slider && (
          <div className={classes.imagesWrapper}>
            <img src="https://cssbattle.dev/targets/53.png" alt="card-img" />
            <img src="https://cssbattle.dev/targets/54.png" alt="card-img" />
            <img src="https://cssbattle.dev/targets/55.png" alt="card-img" />
            <img src="https://cssbattle.dev/targets/56.png" alt="card-img" />
            <img src="https://cssbattle.dev/targets/57.png" alt="card-img" />
            <img src="https://cssbattle.dev/targets/58.png" alt="card-img" />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
