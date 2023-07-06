import React, { useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from './Context_API/AuthContex';
import { useNavigate } from 'react-router-dom';
import Lodder from './Lodder/Lodder';
// import { BASE_URL } from '../config';
const BASE_URL=process.env.REACT_APP_BASE_URL;

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrormsg] = useState("");
  const [islodder,setIslodder]=useState(false);
  const { login } = useContext(AuthContext)
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIslodder(true);
    try {
      // Create an object with the form data
      const formData = {
        email:username,
        name,
        password,
        confirmPassword,
      };

      // Make a POST request to the backend API
      if (password.length > 7 && confirmPassword === password) {
        await axios.post(`${BASE_URL}user/signup`, formData);

        // Handle the response from the backend
        // console.log(response.data);

        // Clear the form inputs data
        setUsername('');
        setName('');
        setPassword('');
        setConfirmPassword('');
        // login to the user
        setIslodder(false);
        login();

        // after login redirect to home page
        navigate('/');
      }
      else {
        setErrormsg("Password lenght less then 8 or password not matched");
        setIslodder(false);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      // console.error(error);
      setErrormsg(error.message);
      setIslodder(false);
    }
  };

  return (
    <div className='signupCont'>
      <div className="wrapper">
        <div className='errorMsg'>{errorMsg}</div>
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h3><i>InterviewConnect</i></h3>
              <h2>Welcome Back</h2>
              <p>Already have account.<br />It's totally free</p>
              <a className="btn" href="login">Login</a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Signup </h2>
              <form onSubmit={handleSubmit}>
                <p>
                  <label>Email address<span>*</span></label>
                  <input type="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </p>
                <p>
                  <label>Name<span>*</span></label>
                  <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                </p>
                <p>
                  <label>Password<span>*</span></label>
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                  <label>Conform Password<span>*</span></label>
                  <input type="password" placeholder="Conform Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </p>
                <p>
                  {!islodder?<input type="submit" value="Sign Up" />:<Lodder/>}
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
