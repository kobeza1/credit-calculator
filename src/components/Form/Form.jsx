import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const FormComponent = ({ updateResult, handleSubmitForm }) => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");

  const mainFunc = (amount, interest, numberOfYears) => {
    let data = [];
    let res = amount;

    const annualAmount = amount / numberOfYears;
    const interestPercentage = interest / 100;

    for (let i = 0; i < numberOfYears; i += 1) {
      let object = {
        year: i + 1,
        body: Math.round(annualAmount),
        interest: Math.round((amount - annualAmount * i) * interestPercentage),
        amount: Math.round(
          annualAmount + (amount - annualAmount * i) * interestPercentage
        ),
        result: Math.round(
          (res += (amount - annualAmount * i) * interestPercentage)
        ),
      };
      data.push(object);
    }
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = mainFunc(amount * 1, interest * 1, years * 1);
    handleSubmitForm({
      years: years * 1,
      interest: interest * 1,
      amount: amount * 1,
    });
    updateResult(result);
    setAmount("");
    setInterest("");
    setYears("");
  };

  const handleName = ({ target }) => {
    switch (target.name) {
      case "amount":
        setAmount(target.value);
        break;
      case "interest":
        setInterest(target.value);
        break;
      case "years":
        setYears(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Credit Amount</Form.Label>
        <Form.Control
          required
          // minLength={3}
          // pattern="[A-Za-z]{1,32}"
          value={amount}
          name="amount"
          type="number"
          // placeholder="Amount"
          autoFocus
          onChange={handleName}
        />
      </Form.Group>
      <Form.Group
        required
        className="mb-3"
        controlId="exampleForm.ControlInput2"
      >
        <Form.Label>Interest Rate</Form.Label>
        <Form.Control
          required
          // minLength={3}
          // pattern="[A-Za-z]{1,32}"
          value={interest}
          name="interest"
          type="number"
          // placeholder="Interest value"
          onChange={handleName}
        />
      </Form.Group>
      <Form.Group
        required
        className="mb-3"
        controlId="exampleForm.ControlInput3"
      >
        <Form.Label>Years</Form.Label>
        <Form.Control
          required
          // minLength={3}
          // pattern="[A-Za-z]{1,32}"
          value={years}
          name="years"
          type="number"
          onChange={handleName}
        />
      </Form.Group>
      <Button type="submit" variant="dark">
        Submit
      </Button>
    </Form>
  );
};
