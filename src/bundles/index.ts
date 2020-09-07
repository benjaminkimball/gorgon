import { composeBundles } from "redux-bundler";

import { routeBundle } from "~/bundles/route";
import { userBundle } from "~/bundles/user";

export const createStore = composeBundles(routeBundle, userBundle);
