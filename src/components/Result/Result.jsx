import Table from "react-bootstrap/Table";

export const Result = ({ res }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Year</th>
          <th>Credit Body</th>
          <th>Interest Rate</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {res.map(({ year, body, interest, result }) => (
          <tr key={year}>
            <td>{year}</td>
            <td>{body}</td>
            <td>{interest}</td>
            <td>{result}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
