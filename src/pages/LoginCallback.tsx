import { useEffect } from "react";
import { RouteProps, useHistory } from "react-router";
import { useSetTokenImgur } from "../context/Imgur/ImgurHooks";

const LoginCallback = (props: RouteProps) => {
  const history = useHistory();
  const setToken = useSetTokenImgur();

  useEffect(() => {
    const { location } = props;
    const param = new URLSearchParams(location?.hash.split("#")[1]);
    const accessToken = param.get("access_token");

    if (accessToken) {
      setToken(accessToken);
      history.replace("/card");
    } else {
      history.replace("/");
    }
  }, []);

  return null;
};

export default LoginCallback;
