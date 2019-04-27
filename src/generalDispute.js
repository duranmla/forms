import states from "./states";
import disputeTypes from "./disputeTypes";

export default {
  definitions: {
    DebtTypes: {
      type: "string",
      enum: disputeTypes.values,
      enumNames: disputeTypes.labels
    },
    USAStates: {
      type: "string",
      enumNames: states.labels,
      enum: states.values
    }
  },
  $schema: "http://json-schema.org/schema#",
  title: "Dispute Any Debt in Collections",
  description:
    "This dispute is for all types of debt in collections except student loans.",
  type: "object",
  required: [
    "address",
    "agency-address",
    "agency-city",
    "agency-name",
    "agency-state",
    "agency-zip-code",
    "city",
    "collection-notice-date",
    "debts",
    "name",
    "state",
    "zip-code"
  ],
  properties: {
    debts: {
      title: "Amount of Debt Disputed",
      description:
        "Please provide the amount of debt collectors claim you owe. This will help us better understand the types of debt you and our members are fighting. ",
      type: "object",
      properties: {
        debtType: {
          type: "string",
          title: "Debt Type",
          $ref: "#/definitions/DebtTypes"
        },
        debtAmount: {
          title: "Amount",
          type: "number"
        }
      },
      required: ["debtType", "debtAmount"],
      dependencies: {
        debtType: {
          oneOf: [
            {
              properties: {
                debtType: {
                  title: disputeTypes.labels[2],
                  enum: [disputeTypes.values[2]]
                },
                debtDescription: {
                  title: "Description",
                  type: "string"
                }
              },
              required: ["debtDescription"]
            }
          ]
        }
      }
    },
    personalInformation: {
      title: "Personal Information",
      type: "object",
      properties: {
        address: {
          type: "string",
          title: "Your Mailing Address"
        },
        "agency-address": {
          type: "string",
          title: "Collection agency’s or law firm’s mailing address"
        },
        "agency-city": {
          type: "string",
          title: "Collection agency’s or law firm’s City"
        },
        "agency-name": {
          type: "string",
          title: "Name of collection agency or law firm"
        },
        "agency-state": {
          $ref: "#/definitions/USAStates",
          title: "Collection agency’s or law firm’s State"
        },
        "agency-zip-code": {
          type: "string",
          title: "Collection agency’s or law firm’s Zip Code",
          pattern: "[0-9]{5}"
        },
        city: {
          type: "string",
          title: "Your City"
        },
        name: {
          type: "string",
          title: "Your Full Name"
        },
        state: {
          title: "Your State",
          $ref: "#/definitions/USAStates"
        },
        "zip-code": {
          title: "Your Zip Code",
          type: "string",
          pattern: "[0-9]{5}"
        }
      }
    },
    collectionNotice: {
      title: "Collection notice",
      type: "object",
      properties: {
        "collection-notice-date": {
          type: "string",
          title: "Collection notice date",
          format: "date"
        }
      }
    }
  }
};
