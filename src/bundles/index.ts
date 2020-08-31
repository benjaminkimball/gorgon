import { composeBundles } from "redux-bundler";

import { routesBundle } from "~/bundles/routes";
import { userBundle } from "~/bundles/user";

export const createStore = composeBundles(routesBundle, userBundle);
