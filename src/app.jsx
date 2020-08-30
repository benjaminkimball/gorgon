import { h, render } from "preact";
import { Provider } from "redux-bundler-preact";

import createStore from "./bundles";
import Layout from "./components/layout";

const rootElement = document.getElementById("root");
const store = createStore();

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  rootElement
);
