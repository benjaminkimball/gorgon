import React from "react";
import { render } from "react-dom";
import { Provider } from "redux-bundler-react";

import { createStore } from "~/bundles";
import { Layout } from "~/components/layout";

const store = createStore();

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
