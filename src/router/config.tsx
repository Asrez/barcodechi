import withTour from "app/with-tour";
import { lazy } from "react";

const NotFoundPage = lazy(() => import("pages/not-found/not-found"));
const LoginPage = lazy(() => import("pages/login/login"));

export type routesProps = {
  path: string;
  component: React.FC;
  layout: {
    type: "default" | "core-admin";
    showFooter?: boolean;
  };
  authType: "no-auth" | "auth";
  showFooter?: boolean;
  breadCrumbName?: string;
};

const routes: routesProps[] = [
  {
    path: "*",
    component: NotFoundPage,
    layout: {
      type: "default",
    },
    authType: "no-auth",
  },
  {
    path: "/login",
    authType: "no-auth",
    layout: {
      type: "default",
      showFooter: false,
    },
    component: withTour(LoginPage, "login"),
  },
];

export default routes;
