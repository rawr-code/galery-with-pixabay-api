import { getImagesResponse } from "../../mockups/imgurResponse";
import { ImgurData } from "../../types/imgur";

export function getImages() {
  return new Promise<{ data: ImgurData[] }>((resolve) => {
    setTimeout(() => {
      resolve(getImagesResponse);
    }, 1000);
  });
}
