import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import QuizCreator from "./components/QuizCreator";
import QuizTaker from "./components/QuizTaker";
import QuizResults from "./components/QuizResults";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-quiz"
            element={
              <ProtectedRoute>
                <QuizCreator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/practice/:quizId"
            element={
              <ProtectedRoute>
                <QuizTaker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute>
                <QuizResults />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;