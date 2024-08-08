import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quizSlice";

const store = configureStore({
  reducer: {
    quizSlice: quizReducer,
  },
});

export default store;
