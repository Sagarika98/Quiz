import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentQuiz, addResult } from "../redux/slices/quizSlice";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "./Timer";

const QuizTaker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quizId } = useParams();
  const { quizzes } = useSelector((state) => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const currentQuiz = quizzes.find((quiz) => quiz.id === parseInt(quizId));
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      setTimeLeft(currentQuestion.timeLimit);
      setSelectedOption(""); // Reset selected option for each question
    }
  }, [currentQuestion]);

  const handleNextQuestion = () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    // Dispatch the result for the current question
    dispatch(
      addResult({
        quizId: currentQuiz.id,
        questionId: currentQuestionIndex,
        isCorrect,
        selectedOption, // Store the user's selected option
      })
    );

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
    } else {
      // Finish the quiz
      navigate("/results");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-400 mb-4">{currentQuestion?.question}</h2>
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleNextQuestion} />
        <div className="space-y-3">
          {currentQuestion?.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                name={`option-${currentQuestionIndex}`}
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
              />
              <label className="ml-3 text-lg text-gray-300">{option}</label>
            </div>
          ))}
        </div>
        <button
          onClick={handleNextQuestion}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
        >
          {currentQuestionIndex < currentQuiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </button>
      </div>
    </div>
  );
};

export default QuizTaker;