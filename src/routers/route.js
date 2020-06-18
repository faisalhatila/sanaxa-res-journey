import React from "react";
import { Route as ReactRouter } from "react-router-dom";
import { Footer, Header, Layout } from "../components";

const Route = (props) => {
  let name = props.component.name;
  const withoutHeaderAndFooter = props.withoutHeaderAndFooter;
  const schema = (
    <React.Fragment>
      {!withoutHeaderAndFooter && <Header name={name} />}
      <ReactRouter {...props} />
      {!withoutHeaderAndFooter && <Footer />}
    </React.Fragment>
  );
  if (props.withoutLayout) return schema;
  return <Layout>{schema}</Layout>;
};

export default Route;
