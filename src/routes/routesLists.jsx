// import { lazyLoad } from "../helpers/lazyLoad";
import { lazy } from "react";
export const publicRoutes = [
  // { path: "/", element: lazyLoad("../pages/home/index.jsx") },
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
];

export const protectedRoutes = [];
