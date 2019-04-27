import React from "react";
import "./App.css";
import MozillaForm from "./MozillaForm";
import styled from "styled-components";

const FormWrapper = styled.div`
  // Layout
  margin: 4rem auto;
  max-width: 100%;
  width: 45rem;

  // Form general
  > form {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 1rem 0;
  }

  .form-group {
    &:not(.field-object) {
      padding: 0 1rem;
    }

    &.field-string,
    &.field-number {
      text-align: left;
    }
  }

  .btn[type="submit"] {
    margin: 0 auto;
    width: 100%;
    width: calc(100% - 2rem);
  }

  // Fields

  // Address
  .field-address {
    float: left;
    padding: 0 1rem;
    width: 33.3%;
  }

  // Debts
  #root_debts {
    .field {
      width: 50%;
      float: left;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <FormWrapper>
        <MozillaForm />
      </FormWrapper>
    </div>
  );
}

export default App;
