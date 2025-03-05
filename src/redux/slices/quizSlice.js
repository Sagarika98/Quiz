import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: [],
    currentQuiz: null,
    results: [], // Stores all results for all quizzes
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes.push(action.payload);
    },
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },
    addResult: (state, action) => {
      // Check if a result for this question already exists
      const existingResultIndex = state.results.findIndex(
        (result) =>
          result.quizId === action.payload.quizId &&
          result.questionId === action.payload.questionId
      );

      if (existingResultIndex !== -1) {
        // Update the existing result
        state.results[existingResultIndex] = action.payload;
      } else {
        // Add a new result
        state.results.push(action.payload);
      }
    },
  },
});

export const { addQuiz, setCurrentQuiz, addResult } = quizSlice.actions;
export default quizSlice.reducer;