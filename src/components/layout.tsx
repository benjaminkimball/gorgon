import React, { Suspense } from "react";
import { connect } from "redux-bundler-react";

const render = ({ route: Route }) => (
  <>
    <nav />
    <main>
      <Suspense fallback={() => <pre>Loading...</pre>}>
        <Route />
      </Suspense>
    </main>
  </>
);

export const Layout = connect("selectRoute", render);
