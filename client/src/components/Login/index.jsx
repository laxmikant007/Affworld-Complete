import { useState  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./index.css";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";

const Login = () => {
	// const [data, setData] = useState({ email: "", password: "" });
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSignupBtn  = () =>{
		navigate("/signup");
	}



	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const url = "http://localhost:8080/api/auth";
            const url = "https://affworld-server.onrender.com/api/auth";
			const data = {
				email,
				password,
			}
			// console.log("data is", data);
			const res  = await axios.post(url, data);
		
			localStorage.setItem("token",JSON.stringify(res.data.token));
			localStorage.setItem("user", JSON.stringify(res.data.user));
		

			if(res){

				console.log("Logged in  successfull ");
				toast.success("Welcome Back to Affworld!!")
			}
			setTimeout(() => {
				
				navigate("/");
			},1000)
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<Layout>

		<div className="register">

        <form className='formRegister' onSubmit={handleSubmit}>
          <h1 style={{ color: "white" }}>Login</h1>
          <div className="form-group">
            <input type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Email"
              required />
          </div>
          <div className="form-group">
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
		  <button onClick={handleSignupBtn} className="btn mt-1 btn-success">Or SignUp Here!</button>


        </form>

      </div>
	  </Layout>
	);
};

export default Login;