import React, { useEffect } from "react";
import { useImgur } from "../../context/Imgur/ImgurHooks";

const CardContainer = () => {
  const [state, getImages] = useImgur();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <ul>
        {state.data &&
          state.data.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default CardContainer;
