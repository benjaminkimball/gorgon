import { createRouteBundle } from "redux-bundler";

import { Home } from "~/pages/home";
import { NotFound } from "~/pages/not-found";

export const routeBundle = createRouteBundle({
  "/": Home,
  "*": NotFound,
});
