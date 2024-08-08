import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Quiz_Initial_Start = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header className="d-flex fw-bold justify-content-center align-items-center">
          Welcome to the Quiz!
        </Card.Header>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Card.Text>Good luck!</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center align-items-center">
          <Link to="/quiz">
            <Button variant="primary">Start Quiz</Button>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Quiz_Initial_Start;
