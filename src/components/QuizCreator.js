import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuiz } from "../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";

const QuizCreator = () => {
  const [quizName, setQuizName] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "", timeLimit: 30, marks: 1 },
  ]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "", timeLimit: 30, marks: 1 },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuiz = () => {
    if (!quizName || questions.some((q) => !q.question || q.options.some((opt) => !opt) || !q.correctAnswer || !q.marks)) {
      alert("Please fill all fields!");
      return;
    }

    const newQuiz = {
      id: Date.now(),
      name: quizName,
      questions,
    };

    dispatch(addQuiz(newQuiz));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Create Quiz</h2>
        <input
          type="text"
          placeholder="Quiz Name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Question {questionIndex + 1}</h3>
            <input
              type="text"
              placeholder="Question"
              value={question.question}
              onChange={(e) => handleQuestionChange(questionIndex, "question", e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mb-4">
              <h4 className="font-semibold text-gray-300 mb-2">Options</h4>
              {question.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-300 mb-2">Correct Answer</h4>
              <input
                type="text"
                placeholder="Correct Answer"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(questionIndex, "correctAnswer", e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-300 mb-2">Timer (seconds)</h4>
              <input
                type="number"
                placeholder="Time Limit"
                value={question.timeLimit}
                onChange={(e) => handleQuestionChange(questionIndex, "timeLimit", e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-300 mb-2">Marks</h4>
              <input
                type="number"
                placeholder="Marks"
                value={question.marks}
                onChange={(e) => handleQuestionChange(questionIndex, "marks", e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
        <button
          onClick={handleAddQuestion}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg mr-4 transition duration-300"
        >
          Add Another Question
        </button>
        <button
          onClick={handleAddQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCreator;