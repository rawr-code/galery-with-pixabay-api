import {
  GET_IMAGES,
  GET_IMAGES_FAIL,
  GET_IMAGES_SUCCESS,
  SET_TOKEN,
} from "./ImgurActions";
import { ImgurAction, ImgurState, INITIAL_STATE } from "./ImgurContext";

export function imgurReducer(
  state = INITIAL_STATE,
  action: ImgurAction
): ImgurState {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        fetch: true,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        fetch: false,
        data: action.data,
      };
    case GET_IMAGES_FAIL:
      return {
        ...state,
        fetch: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
