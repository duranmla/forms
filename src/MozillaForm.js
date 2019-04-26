import React from "react";
import Form from "react-jsonschema-form";
import generalDispute from "./generalDispute";

const log = type => console.log.bind(console, type);

export default () => (
  <Form
    // uiSchema={uiSchema}
    schema={generalDispute}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);
