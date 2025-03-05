import { useSelector } from "react-redux";

const QuizResults = () => {
  const { results, quizzes } = useSelector((state) => state.quiz);

  // Group results by quizId
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.quizId]) {
      acc[result.quizId] = [];
    }
    acc[result.quizId].push(result);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold text-blue-400 mb-6">Quiz Results</h2>
      {Object.keys(groupedResults).length > 0 ? (
        Object.keys(groupedResults).map((quizId) => {
          const quiz = quizzes.find((q) => q.id === parseInt(quizId));
          const quizResults = groupedResults[quizId];

          // Calculate total marks for this quiz
          const totalMarks = quizResults.reduce((acc, result) => {
            const question = quiz.questions[result.questionId];
            return acc + (result.isCorrect ? Number(question.marks) : 0);
        }, 0);
        

          // Calculate total correct answers for this quiz
          const totalCorrectAnswers = quizResults.filter((result) => result.isCorrect).length;

          return (
            <div key={quizId} className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">{quiz.name}</h3>
              {quiz.questions.map((question, index) => {
                const result = quizResults.find((r) => r.questionId === index);
                return (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-semibold text-white">Question {index + 1}: {question.question}</h4>
                    <p className={result?.isCorrect ? "text-green-500" : "text-red-500"}>
                      {result?.isCorrect ? "Correct" : "Incorrect"} - Marks: {result?.isCorrect ? question.marks : "0"}
                    </p>
                    <p className="text-gray-400">Your Answer: {result?.selectedOption || "Not answered"}</p>
                    <p className="text-gray-400">Right Answer: {question.correctAnswer}</p>
                  </div>
                );
              })}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">Total Correct Answers: {totalCorrectAnswers}</h4>
                <h4 className="text-lg font-semibold text-white">Total Marks Obtained: {totalMarks}</h4>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400">No results available.</p>
      )}
    </div>
  );
};

export default QuizResults;