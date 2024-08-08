import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  setSelectedOption,
  setScore,
  setTimeLeft,
  setShowResult,
  nextQuestion,
} from "../features/quizSlice";
import { useNavigate } from "react-router-dom";

const Quiz_Questions_Card = () => {
  const dispatch = useDispatch();
  const {
    questions,
    selectedOption,
    score,
    timeLeft,
    showResult,
    currentQuestionIndex,
  } = useSelector((state) => state.quizSlice);

  let navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }
    const timerId = setInterval(() => {
      dispatch(setTimeLeft(timeLeft - 1));
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, dispatch]);

  const handleOptionClick = (option) => {
    if (selectedOption === null && !showResult) {
      dispatch(setSelectedOption(option));
      if (option === questions[currentQuestionIndex].correctAnswer) {
        dispatch(setScore(score + 1));
      }
      dispatch(setShowResult(true));
      dispatch(setTimeLeft(5));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      dispatch(nextQuestion());
      dispatch(setSelectedOption(null));
      dispatch(setShowResult(false));
      dispatch(setTimeLeft(5));
    } else {
      navigate("/quiz_result");
    }
  };

  return (
    <Card style={{ width: "40rem" }} className="bg-white rounded">
      <Card.Header className="fw-bold">
        Question {currentQuestionIndex + 1}/{questions.length}
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-bold">
          {questions[currentQuestionIndex].question}
        </Card.Title>
      </Card.Body>
      <Card.Body>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <Row key={index}>
            <Col className="mb-2">
              <Button
                variant={
                  selectedOption === option ? "primary" : "outline-primary"
                }
                className="w-100"
                disabled={selectedOption !== null || showResult}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            </Col>
          </Row>
        ))}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center w-100 align-items-center">
        {showResult ? (
          <Card.Text
            className={`${
              selectedOption === questions[currentQuestionIndex].correctAnswer
                ? "text-success"
                : "text-danger"
            } w-100 d-flex justify-content-center  align-items-center`}
            style={{ width: "40px", height: "40px" }}
          >
            {questions[currentQuestionIndex].correctAnswer}
          </Card.Text>
        ) : (
          <Card.Text
            className="border border-solid border-black d-flex justify-content-center align-items-center rounded-circle"
            style={{ width: "40px", height: "40px" }}
          >
            {timeLeft}
          </Card.Text>
        )}
      </Card.Footer>
    </Card>
  );
};

export default Quiz_Questions_Card;
