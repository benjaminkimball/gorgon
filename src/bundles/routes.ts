import { lazy } from "react";
import { createRouteBundle } from "redux-bundler";

const Home = lazy(() => import("../pages/home"));
const NotFound = lazy(() => import("../pages/not-found"));

export default createRouteBundle({
  "/": Home,
  "*": NotFound,
});
