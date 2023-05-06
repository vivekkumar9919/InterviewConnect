
import './App.css';
import './QuesContPage.css'
import './Css files/ReviewPage.css'
import './Css files/loginAndSignupPage.css'
import './Css files/NavbarPage.css'
import './Css files/BeautifulPage.css'
import './Css files/footerPage.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthContextProvider from './Components/Context_API/AuthContextProvider';
import HomeMain from './Components/HomeMain';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import QuizPage from './Components/QuizPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<HomeMain />} >
              <Route path="" element={<HomePage />} />
              <Route path="quiz" element={<QuizPage />} />

            </Route>
            {/* 
          login path /auth/login
          signup path /auth/signup
          */}
            <Route path="/auth"  >
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
            </Route>

          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
