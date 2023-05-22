import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/register.css";
import loginImage from  "../assets/images/login-page.jpg"
import { useState, useEffect } from "react";
// import "../assets/css/signin.css";









export default function Login()  {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // const navigate=useNavigate()

    // useEffect(()=>{
    //     const auth=localStorage.getItem('user')
    //     if(auth){
    //         navigate('/')
    //     }
    // },[])


  const handleClick=  async ()=>{
    console.log(email,password)
     let result= await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
     }
     )
     // the result is in readstream format so it has to be converted into string
     result= await result.json();

     console.log(result)
   if(result.auth){
        //   confirm("Login successfully")
        localStorage.setItem("user",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.auth))
        // navigate('/')

   }
   else{
    alert("Please enter correct details")
   }
  }




  return (
    <div className="container">
     
    <div className="section">
      <div class="screen-1">
        <div class="input_box">
          <label for="email">Email Address</label>
          <div class="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" placeholder="Username@gmail.com" />
          </div>
        </div>
        <div class="input_box">
          <label for="password">Password</label>
          <div class="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              class="pas"
              type="password"
              name="password"
              placeholder="············"
              onChange={(e)=>setPassword(e.target.value)} value={password}
            />
          </div>
        </div>
         <button  onClick={handleClick} class="login"   ><Link to="/profile" className="link_btn">Login</Link> </button>
        <div class="footer">
          <Link to="/register" className="links_btn">Sign up</Link>
          <Link className="links_btn">Forgot Password?</Link>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img src={loginImage} alt="Image" style={{ maxWidth: "100%", height: "auto" }}/>
    </div>
   
    </div>

  );
};


