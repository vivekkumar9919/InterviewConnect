import React ,{useState, useContext} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AuthContext from './Context_API/AuthContex';
import axios from 'axios'
// import { BASE_URL } from '../config';
const BASE_URL=process.env.REACT_APP_BASE_URL;


export default function Navbar(props) {
  const {logout ,accessToken} =useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  let navigate = useNavigate();
  let handlelogout = () => {
    logout();
    navigate("auth/login");
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.id]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}add-comment`, formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className='NavbarCont'>
      <nav className="navbar navbar-expand-lg bg-color fixed-top"  >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">InterviewConnect</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="d-flex justify-content-center w-100">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active nav-element" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link nav-element ${props.disabled ? 'disabled-link' : ''}`} to="quiz" >Quiz</Link> </li>
                <li className="nav-item">
                  <Link className="nav-link nav-element" to="about" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Feedback</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-element" href='#reviewNav'>Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-element" href='#contactNav'>Contactus</a>
                </li>
                {
                  (accessToken)?<li className="nav-item">
                  <Link className="nav-link nav-element" to="admin">Admin</Link>
                </li>:console.log("Not admin")
                }
              </ul>
            </div>
            {(!accessToken) ? <form className="d-flex justify-content-end">
              <Link className="btn nav-btn mx-2" to="/auth/login" role="button"><i class="fa fa-sign-in" aria-hidden="true"></i></Link>
              {/* <Link className="btn nav-btn mx-2" to="/auth/signup" role="button">Signup</Link> */}
            </form> : <button className="btn btn-danger mx-2" onClick={handlelogout}> <i class="fa fa-sign-out" aria-hidden="true"></i></button>}
          </div>
        </div>
      </nav>

      {/* feedback modal code */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">Name:-</label>
                  <input type="text" className="form-control" id="name" required onChange={handleChange} value={formData.name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">Email:-</label>
                  <input type="email" className="form-control" id="email" required onChange={handleChange} value={formData.email} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message" required onChange={handleChange} value={formData.message}></textarea>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Outlet />
    </div>
  )
}
