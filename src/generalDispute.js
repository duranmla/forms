export default {
  definitions: {
    DebtTypes: {
      type: "string",
      anyOf: [
        {
          title: "Federal student loan debt",
          const: "federalStudentLoanDebt"
        },
        {
          title: "Credit card debt",
          const: "creditCardDebt"
        }
      ]
    },
    USAStates: {
      type: "string",
      anyOf: [
        {
          title: "Alabama",
          const: "foo"
        },
        {
          title: "Florida",
          const: "bar"
        }
      ]
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
          title: "Debt type",
          $ref: "#/definitions/DebtTypes"
        },
        debtAmount: {
          type: "number",
          title: "Amount"
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
