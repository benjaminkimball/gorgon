import { composeBundles } from "redux-bundler";

import routesBundle from "./routes";
import userBundle from "./user";

export default composeBundles(routesBundle, userBundle);
