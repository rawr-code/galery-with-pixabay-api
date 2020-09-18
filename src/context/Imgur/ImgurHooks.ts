import { useContext } from "react";
import { getImagesRequest, getImagesSuccess, setToken } from "./ImgurActions";
import { ImgurContext, ImgurState } from "./ImgurContext";
import { getImages } from "./ImgurServices";

export const useImgur = (): [ImgurState, () => void] => {
  const { state, dispatch } = useContext<ImgurContext>(ImgurContext);
  return [
    state,
    () => {
      dispatch(getImagesRequest());
      getImages().then((res) => {
        dispatch(getImagesSuccess(res.data));
      });
    },
  ];
};

export const useSetTokenImgur = (): ((token: string) => void) => {
  const { dispatch } = useContext<ImgurContext>(ImgurContext);
  return (token) => dispatch(setToken(token));
};
