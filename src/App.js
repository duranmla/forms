import React from "react";
import "./App.css";
import MozillaForm from "./MozillaForm";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 4rem auto;
  max-width: 100%;
  width: 45rem;

  > form {
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 1rem;
  }

  .btn[type="submit"] {
    width: 100%;
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
