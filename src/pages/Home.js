import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { quizzes } = useSelector((state) => state.quiz);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to the Online Quiz Platform</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-6 mb-12">
        <Link
          to="/create-quiz"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Create Quiz
        </Link>
        <Link
          to="/practice"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Take Quiz
        </Link>
      </div>

      {/* Available Quizzes */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">Available Quizzes</h2>
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{quiz.name}</h3>
              <p className="text-gray-400 mb-4">{quiz.questions.length} questions</p>
              <Link
                to={`/practice/${quiz.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 inline-block"
              >
                Take This Quiz
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No Quizzes available. Create one!</p>
        )}
      </div>
    </div>
  );
};

export default Home;