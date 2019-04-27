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

  // This allow to make it as a overall title instead as a section
  #root__title {
    border-bottom: 0;
    font-size: 2rem;
    margin-bottom: 0rem;
  }

  #root__description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  .form-group {
    text-align: left;

    [id*="__title"],
    .field-description {
      padding: 0 1rem;
    }

    &:not(.field-object) {
      padding: 0 1rem;
    }
  }

  .btn[type="submit"] {
    margin: 0 auto;
    width: 100%;
    width: calc(100% - 2rem);
  }

  // Fields
  .prefix-currency {
    position: relative;

    &::before {
      bottom: 0;
      content: "$";
      display: block;
      font-size: 1rem;
      left: 1rem;
      line-height: 2.2rem;
      opacity: 0.5;
      position: absolute;
    }

    > input {
      padding-left: 1rem;
    }
  }

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
