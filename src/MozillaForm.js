import React from "react";
import Form from "react-jsonschema-form";
import generalDispute from "./generalDispute";

const log = type => console.log.bind(console, type);

const uiSchema = {
  "ui:order": ["debts", "personalInformation", "collectionNotice"],
  debts: {
    debtType: {
      "ui:placeholder": "Select one"
    },
    debtAmount: {
      classNames: "prefix-currency"
    }
  },
  personalInformation: {
    "ui:order": [
      "name",
      "address",
      "city",
      "state",
      "zip-code",
      "agency-name",
      "agency-address",
      "agency-city",
      "agency-state",
      "agency-zip-code"
    ],
    address: {
      "ui:placeholder": "Street, unit number, floor, door number"
    },
    name: {
      "ui:placeholder": "Jane Doe"
    },
    city: {
      classNames: "field-address"
    },
    state: {
      classNames: "field-address",
      "ui:placeholder": "Select one"
    },
    "zip-code": {
      classNames: "field-address"
    },
    "agency-address": {
      "ui:placeholder": "Street, unit number, floor, door number"
    },
    "agency-city": {
      classNames: "field-address"
    },
    "agency-state": {
      classNames: "field-address",
      "ui:placeholder": "Select one"
    },
    "agency-zip-code": {
      classNames: "field-address"
    }
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
