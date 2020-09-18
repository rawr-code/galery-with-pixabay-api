import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { ImgData } from "../../pages/Home";
import ClassNames from "../../utils/classNames";
import classes from "./Card.module.scss";

import logo from "./logo.svg";

interface Props {
  title: string;
  info?: string;
  description?: string;
  slider?: boolean;
  photos?: ImgData[];
}

const Card: React.FC<Props> = ({
  title,
  info,
  description,
  slider,
  photos,
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
        {info && <p className={classes.info}>{info}</p>}
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
        {slider && photos && (
          <div className={classes.imagesWrapper}>
            {photos.map((item, index) => (
              <a
                className={classes.imageLink}
                href={item.pageURL}
                target="__blank"
                key={item.pageURL}
              >
                <LazyLoadImage
                  src={item.largeImageURL}
                  alt={item.user}
                  effect="blur"
                  placeholderSrc={logo}
                />
                <p className={classes.badge}>{item.user}</p>
              </a>
            ))}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
