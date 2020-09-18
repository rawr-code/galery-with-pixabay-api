import { createContext } from "react";
import { ImgurData } from "../../types/imgur";
import { ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { imgurReducer } from "./ImgurReducer";

export interface ImgurState {
  fetch: boolean;
  data?: ImgurData[];
  token?: string;
}
export type ImgurContext = ManageContext<ImgurState>;

export type ImgurAction = {
  type: string;
  data?: ImgurData[];
  token?: string;
};

export const INITIAL_STATE = {
  fetch: false,
};

export const ImgurContext = createContext<ImgurContext>({
  state: INITIAL_STATE,
  dispatch: (action) => {},
});

export const ImgurProvider = ProviderCreator<ImgurState, ImgurAction>(
  INITIAL_STATE,
  imgurReducer,
  ImgurContext
);
