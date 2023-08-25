import { useState } from "react";
import { Container } from "./Container/Container";
import { FormComponent } from "./Form/Form";
import { Result } from "./Result/Result";

const App = () => {
  const [res, setRes] = useState("");

  const updateResult = (value) => {
    setRes(value);
  };

  return (
    <Container>
      <FormComponent updateResult={updateResult} />
      <Result res={res} />
    </Container>
  );
};

export default App;
