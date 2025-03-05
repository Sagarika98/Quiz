# Online Quiz Platform

## Objective
The Online Quiz Platform is a web-based application that allows users to create, take, and score quizzes. It includes authentication, quiz creation, practice mode, and result analysis.

## Technologies Used
- **Frontend**: React.js (JavaScript/TypeScript)
- **State Management**: Redux
- **Styling**: Tailwind CSS / Bootstrap 5

## Features
1. **User Authentication**
   - Login functionality to access quiz features.

2. **Quiz Creation**
   - Admins can add multiple-choice questions.
   - Set a time limit for each question.
   - Provide solutions for each question.

3. **Practice Mode**
   - Users can take quizzes in a simulated exam environment.
   - Includes a timer for each question.

4. **Scoring & Result Analysis**
   - Users receive scores at the end of the test.
   - Displays correct and incorrect answers for review.

5. **Responsive Design**
   - Optimized for both desktop and mobile devices.

## Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/quiz-platform.git
   cd quiz-platform
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Application**
   ```sh
   npm start
   ```

## Folder Structure
quiz-platform/
├── node_modules/            # Installed dependencies
├── public/                  # Static assets (images, HTML templates, etc.)
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── ProtectedRoute.js
│   │   ├── QuizCreator.js
│   │   ├── QuizResults.js
│   │   ├── QuizTaker.js
│   │   ├── Timer.js
│   ├── pages/               # Application pages
│   │   ├── Home.js
│   │   ├── Practice.js
│   ├── redux/               # Redux state management
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── quizSlice.js
│   │   ├── store.js
│   ├── App.css              # Global styles
│   ├── App.js               # Main application component
│   ├── index.css            # Additional global styles
│   ├── index.js             # Entry point
│   ├── reportWebVitals.js   # Performance tracking
│   ├── tailwind.config.js   # Tailwind CSS configuration
├── .gitignore               # Git ignore file
├── package-lock.json        # Dependency lock file
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation

```

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-name`).
3. Commit your changes.
4. Push to the branch and submit a PR.

## License
This project is licensed under the MIT License.

