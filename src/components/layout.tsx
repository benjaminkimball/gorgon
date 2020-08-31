import React, { Suspense } from "react";
import { connect } from "redux-bundler-react";

function Layout({ route: Route }) {
  return (
    <>
      <nav />
      <main>
        <Suspense fallback={() => <pre>Loading...</pre>}>
          <Route />
        </Suspense>
      </main>
    </>
  );
}

export default connect("selectRoute", Layout);
