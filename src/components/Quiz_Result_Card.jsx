import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz, resetQuestionIndex } from "../features/quizSlice";
const Quiz_Result_Card = () => {
  let { score } = useSelector((state) => state.quizSlice);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleRestart = () => {
    dispatch(resetQuiz());
    dispatch(resetQuestionIndex());
    navigate("/");
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header className="d-flex fw-bold justify-content-center align-items-center">
          Quiz Completed
        </Card.Header>
        <Card.Body className="d-flex justify-content-center align-items-center flex-column">
          <Card.Title>Your results</Card.Title>
          <Card.Text className="text-success">{score} of 4</Card.Text>
        </Card.Body>
        <Card.Footer className=" d-flex  justify-content-center align-items-center">
          <Button onClick={handleRestart} variant="primary">
            Try Again
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Quiz_Result_Card;
