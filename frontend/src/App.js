
import './App.css';
import './QuesContPage.css'
import './Css files/ReviewPage.css'
import './Css files/loginAndSignupPage.css'
import './Css files/NavbarPage.css'
import './Css files/BeautifulPage.css'
import './Css files/footerPage.css'
import './Css files/AdminNavbar.css'
import './Css files/PostData.css'
import './Css files/GetData.css'
import './Css files/AdminDashboard.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthContextProvider from './Components/Context_API/AuthContextProvider';
import HomeMain from './Components/HomeMain';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import HomePage from './Components/HomePage';
import QuizPage from './Components/QuizPage';
import AdminDashboard from './Components/admindashboard/AdminDashboard';
import GetData from './Components/admindashboard/GetData';
import PostData from './Components/admindashboard/PostData';
import DeleteData from './Components/admindashboard/DeleteData';
import UpdateData from './Components/admindashboard/UpdateData';
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

            <Route path="/admin" element={<AdminDashboard/>}>
              <Route path="" element={<GetData/>}/>
              <Route path="post" element={<PostData/>}/>
              <Route path="delete" element={<DeleteData/>}/>
              <Route path="update" element={<UpdateData/>}/>
            </Route>

          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
