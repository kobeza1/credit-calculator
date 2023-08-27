import { useState } from "react";
import { Container } from "./Container/Container";
import { FormComponent } from "./Form/Form";
import { Result } from "./Result/Result";
import { Section } from "./Section/Section";

const App = () => {
  const [res, setRes] = useState([]);

  const updateResult = (value) => {
    setRes(value);
  };

  return (
    <Container>
      <Section>
        <FormComponent updateResult={updateResult} />
      </Section>
      {res.length !== 0 && (
        <Section>
          <Result res={res} />
        </Section>
      )}
    </Container>
  );
};

export default App;
