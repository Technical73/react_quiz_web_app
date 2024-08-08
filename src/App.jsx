import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  Quiz_Questions_Card,
  Quiz_Result_card,
  Quiz_Initial_Start,
} from "../src/components/index";

function App() {
  return (
    <Router>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center bg-primary"
        style={{ height: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<Quiz_Initial_Start />} />
          <Route path="/quiz" element={<Quiz_Questions_Card />} />
          <Route path="/quiz_result" element={<Quiz_Result_card />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
