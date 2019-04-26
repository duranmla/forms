import React from "react";
import Form from "react-jsonschema-form";
import generalDispute from "./generalDispute";

const log = type => console.log.bind(console, type);

const uiSchema = {
  "ui:order": [
    "debts",
    "name",
    "address",
    "city",
    "state",
    "zip-code",
    "agency-name",
    "agency-address",
    "agency-city",
    "agency-state",
    "agency-zip-code",
    "collection-notice-date"
  ]
};

export default () => (
  <Form
    uiSchema={uiSchema}
    schema={generalDispute}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);
