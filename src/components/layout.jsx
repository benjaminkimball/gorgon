import { h, Fragment } from "preact";
import { connect } from "redux-bundler-preact";

function Layout({ route: Route }) {
  return (
    <Fragment>
      <nav />
      <main>
        <Route />
      </main>
    </Fragment>
  );
}

export default connect("selectRoute", Layout);
