import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";
// import { ToastContainer } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import Layout from "../Layout/Layout";


const Signup = () => {
	const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = ()=>{
		navigate("/login");
	}



	const handleSubmit = async (e) => {
		e.preventDefault();
         console.log("data is");

		


		try {
			const data = {
				 firstName , lastName,email , password  
			 }
			 console.log(data)
			// const url = "http://localhost:8080/api/users";
            const url = "https://affworld-server.onrender.com/api/users";
			const res = await axios.post(url, data);

			// navigate("/login");
			if(res.status==201){
				toast.success(res.data.message);
			}
			console.log("res is", res);
			// console.log("new user is", res.newuser.firstName);
			const d={
				firstName:res.newuser.firstName,
				lastName:res.newuser.lastName,
			}

			// console.log(res.message);
			localStorage.setItem("user",JSON.stringify(d));
			localStorage.setItem("token",JSON.stringify(res.token));
		} catch (error) {
			// if (
			// 	error.response &&
			// 	error.response.status >= 400 &&
			// 	error.response.status <= 500
			// ) {
			// 	setError(error.response.data.message);
			// }
			console.log("this is Error-->",error);
			toast.error(error.response.data.message);
			// error.response.data.message
		}
	};

	return (
		<Layout>
		<div className="register">

		<form className='formRegister' onSubmit={handleSubmit}>
		<h1 style={{color:"white"}}>Register</h1>
			<div className="form-group">
				<input type="text"
					value={firstName}
					onChange={(e)=>setFirstName(e.target.value)}
					className="form-control"
					id="exampleInputName"
					placeholder="Enter First Name" 
					required 
					/>
					
			</div>
			<div className="form-group">
				<input type="text"
				 value={lastName}
					onChange={(e)=>setLastName(e.target.value)}
					className="form-control"
					id="exampleInputLastName"
					placeholder="Enter Last Name"
					required />
			</div>
			<div className="form-group">
				<input type="text"
				 value={email}
					onChange={(e)=>setEmail(e.target.value)}
					className="form-control"
					id="exampleInputEmail"
					placeholder="Enter Email"
					required />
			</div>
			<div className="form-group">
				<input type="password" 
				 value={password}
					onChange={(e)=>setPassword(e.target.value)}
				className="form-control"
				 id="exampleInputPassword1"
				  placeholder="Password" 
					required
				  />
			</div>
			

			<button type="submit" className="btn btn-primary">Submit</button>
			<button onClick={handleLogin} className="btn mt-1 btn-success">Already User? Login Here!</button>

		</form>


	</div>
	<ToastContainer/>


	</Layout>
	
	);
};

export default Signup;