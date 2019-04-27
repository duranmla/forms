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
  ],
  city: {
    classNames: "field-address"
  },
  state: {
    classNames: "field-address"
  },
  "zip-code": {
    classNames: "field-address"
  },
  "agency-city": {
    classNames: "field-address"
  },
  "agency-state": {
    classNames: "field-address"
  },
  "agency-zip-code": {
    classNames: "field-address"
  }
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
