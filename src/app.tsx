import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "~/store";

render(
  <Provider store={store}>
    <pre>gorgon</pre>
  </Provider>,
  document.getElementById("root")
);
