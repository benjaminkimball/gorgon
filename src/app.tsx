import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { Layout } from "~/components/layout";
import { store } from "~/store";

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
