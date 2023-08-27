import { useState } from "react";
import { Container } from "./Container/Container";
import { FormComponent } from "./Form/Form";
import { Result } from "./Result/Result";
import { Section } from "./Section/Section";
import { Data } from "./Data/Data";

const App = () => {
  const [res, setRes] = useState([]);
  const [submitData, setSubmitData] = useState({});

  const updateResult = (value) => {
    setRes(value);
  };

  const handleSubmitForm = (object) => {
    setSubmitData(object);
  };

  return (
    <Container>
      <Section>
        <FormComponent
          updateResult={updateResult}
          handleSubmitForm={handleSubmitForm}
        />
      </Section>
      {res.length !== 0 && (
        <Section>
          <Data submitData={submitData} />
          <Result res={res} />
        </Section>
      )}
    </Container>
  );
};

export default App;
