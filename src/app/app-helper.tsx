import { PageLoader } from "components";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { routesProps } from "router/config";
import { changeToken } from "state-manager/reducer/profile";
import { RootState } from "state-manager/store";
import { CoreAdminLayout, DefaultLayout } from "../layout";

interface RequireAuthProps {
  children: ReactNode;
  requiredRoles?: string[];
}

interface RequireNoAuthProps {
  children: ReactNode;
}

interface RequireAccessProps {
  children: ReactNode;
  requiredRoles?: string[];
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { token: userToken } = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") || userToken;

  useEffect(() => {
    if (token && token !== userToken) {
      dispatch(changeToken(token));
      searchParams.delete("token");
      setSearchParams(searchParams);
    } else if (!token) {
      toast.warn("شما خارج شدید.");
      navigate(`/login?callbackUrl=${location.pathname}`, { replace: true });
    }
  }, [token, userToken, searchParams, location.pathname]);

  if (!token) return <PageLoader />;

  return <>{children}</>;
};

const RequireNoAuth: FC<RequireNoAuthProps> = ({ children }) => {
  // complete later...

  return <>{children}</>;
};

const RoutesLayoutHandler = ({
  type,
  hideSettingMenu,
  children,
  showFooter = true,
}: {
  type: routesProps["layout"]["type"];
  hideSettingMenu?: boolean;
  children: React.ReactNode;
  showFooter?: boolean;
}) => {
  switch (type) {
    case "default":
      return (
        <DefaultLayout
          showFooter={showFooter}
          hideSettingMenu={hideSettingMenu}
        >
          {children}
        </DefaultLayout>
      );
    case "core-admin":
      return <CoreAdminLayout>{children}</CoreAdminLayout>;
    default:
      return null;
  }
};

export { RequireAuth, RequireNoAuth, RoutesLayoutHandler };
