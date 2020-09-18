import React from "react";
import { Helmet } from "react-helmet";

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found | gorgon</title>
      </Helmet>

      <pre>NotFound</pre>
    </>
  );
}
