import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Mark Twain",
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2",
    },
  ],
  currentQuestionIndex: 0,
  selectedOption: null,
  score: 0,
  timeLeft: 5,
  showResult: false,
  quizCompleted: false,
};

const quizSlice = createSlice({
  name: "quizSlice",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    resetQuestionIndex: (state) => {
      state.currentQuestionIndex = 0;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
    },
    setShowResult: (state, action) => {
      state.showResult = action.payload;
    },
    setQuizCompleted: (state, action) => {
      state.quizCompleted = action.payload;
    },
    resetQuiz: (state) => {
      state.selectedOption = null;
      state.score = 0;
      state.timeLeft = 5;
      state.showResult = false;
      state.quizCompleted = false;
      state.currentQuestionIndex = 0;
    },
  },
});

export const {
  nextQuestion,
  resetQuestionIndex,
  setSelectedOption,
  setScore,
  setTimeLeft,
  setShowResult,
  setQuizCompleted,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
