import React ,{useState} from  'react'
import axios from 'axios'
import AuthContext from './Context_API/AuthContex';
import { useContext } from 'react';
import { BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate=useNavigate();
  const {login}=useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create an object with the login credentials
      const formData = {
        email:username,
        password:password,
      };

      // Make a POST request to the backend API
      const response = await axios.post(`${BASE_URL}user/login`, formData);

      // Handle the response from the backend
      console.log("login data",response.data); 
    

      alert(response.data.message);
      // const isAdmin=true;
      const isAdmin=response.data.details.admin;
      // console.log(isAdmin);
      console.log("is admin ",isAdmin);

      // Clear the form inputs
      setUsername('');
      setPassword('');
      setErrorMsg('');

      // set login Context api
      // login();
      if(isAdmin){
        const token =response.data.token;
        Cookies.set('authToken', token);
        const cookieValue = Cookies.get('authToken');
        console.log(cookieValue);
        login(cookieValue);
        navigate('/admin');
      }
      else{
      navigate('/');
      login();
      }

    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <div className='loginCont'>

      <div className="wrapper">
      <div className='errorMsg'>error msg {errorMsg}</div>
        <div className="container">
          <div className="col-left">
            <div className="login-text">
            <h3><i>InterviewConnect</i></h3>
              <h2>Welcome Back</h2>
              <p>Create your account.<br />It's totally free.</p>
              <a className="btn" href="signup">Sign Up</a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <p>
                  <label>Email address<span>*</span></label>
                  <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </p>
                <p>
                  <label>Password<span>*</span></label>
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                  <input type="submit" value="Login In" />
                </p>
                <p>
                  <a href="/">Forget Password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div >
          <a href="/">Go to Home</a>
        </div>
      </div>
    </div>
  )
}
