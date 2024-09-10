import { useTour } from "@reactour/tour";
import { Helmet } from "components";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { changeToken } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import { LoginContainer } from "./css/login.style";

const Login: FC = () => {
  const {
    token: userToken,
    seenTours,
    userInfo,
  } = useSelector((state: RootState) => state.profile);
  const { setIsOpen: setIsOpenTour } = useTour();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [invalidSms, setInvalidSms] = useState(false);
  let [searchParams] = useSearchParams();

  const loginSuccessHandler = (token: string) => {
    const callbackUrl = searchParams.get("callbackUrl");
    toast.success("ورود موفق.");

    dispatch(changeToken(token));
  };

  // if user logged in redirect to home
  useEffect(() => {
    if (userToken && userInfo) {
      const callbackUrl = searchParams.get("callbackUrl");
      navigate(callbackUrl || "/applications");
    }
  }, [userToken, userInfo]);

  // tour popover
  useEffect(() => {
    if (!seenTours.includes("login")) {
      setTimeout(() => setIsOpenTour(true), 500);
    }
  }, [seenTours]);

  return (
    <LoginContainer>
      <Helmet title="ورود" />
      <h1>Login</h1>
    </LoginContainer>
  );
};

export default Login;
