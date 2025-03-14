import { RouteProps } from "react-router-dom";
import { MainPage } from "../../../pages/main";
import { DetailsPage } from "../../../pages/details";
import { Error } from "../../../shared/ui/error";

// global routing
export enum AppRoutes {
  MAIN = "main",
  DETAILS = "details",
  ERROR = "error",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.DETAILS]: "/details/:id",
  [AppRoutes.ERROR]: "*",
};

// Routing config
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.DETAILS]: {
    path: RoutePath.details,
    element: <DetailsPage />,
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <Error />,
  },
};
