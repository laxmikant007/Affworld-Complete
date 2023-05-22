import React from 'react'
import { Link } from "react-router-dom";
import signupImage from "../assets/images/sign-up.jpg"
import "../assets/css/register.css";
import { useState, useEffect } from "react";


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [navigate, setNavigate] = useState('')
  // const navigate=useNavigate();
  // const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      // navigate('/')
      // <Link to="/"</Link>
      // setNavigate('/')
    }
  }, [])
  const handleClick = async () => {
    console.log("function has been called");
    console.log(name, email, password);

    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
      // navigate('/');
    // setNavigate('/')
    // here user is the key
    localStorage.setItem("user", JSON.stringify(result.result))
    localStorage.setItem("token", JSON.stringify(result.auth))
    console.log("result is " + result);
  };
  return (
    <div className='container' >
      <div className='section'>
        <div class="screen-1">
          <div class="input_box">
            <label for="name">Full Name</label>
            <div class="sec-2">
              <ion-icon name="person-outline"></ion-icon>
              <input value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }} type="text" name="name" placeholder="Enter Your name" />
            </div>
          </div>
          <div class="input_box">
            <label for="email">Email Address</label>
            <div class="sec-2">
              <ion-icon name="mail-outline"></ion-icon>
              <input value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }} type="email" name="email" placeholder="Username@gmail.com" />
            </div>
          </div>
          <div class="input_box">
            <label for="number">Mobile number</label>
            <div class="sec-2">
              <ion-icon name="call-outline"></ion-icon>
              <input type="email" name="email" placeholder="+ 91-000-0000-000" />
            </div>
          </div>
          <div class="input_box">
            <label for="password">Password</label>
            <div class="sec-2">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="pas"
                type="password"
                name="password"
                placeholder="············"
              />
            </div>
          </div>
          <button onClick={handleClick}  class="login">Sign Up</button>
          <div class="footer">
            Already have account? <Link to="/login" className="links_btn">Login</Link>
          </div>
        </div>


      </div>
      <div class="image-container">
        <img src={signupImage} alt="Image" style={{ maxWidth: "100%", height: "auto", width: "40vh" }} />
      </div>



    </div>
  )
}
export default Register;
