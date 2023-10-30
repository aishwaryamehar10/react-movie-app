import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login({onLogin, onClose}) {

   const [email, setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const navigate = useNavigate();
   const [showError, setShowError] = useState(false);

   const handleLogin = () => {
    if(email === "admin@admin.com" && password === "admin123") {
       setShowAlert(true);
        setIsAuthenticated(true);
        
    }
    else {
        alert("Invalid Credentials.Please try again");
        navigate("/");
        setShowAlert(true);
        setShowError(true);
    }
   }

   if(isAuthenticated) {
    navigate("/home");
   }

  

 return (
    <div className='login-modal'>
    <div className='login-form'>
    {showAlert && (
          <div className={`alert ${showAlert ? 'show' : ''} ${showError ? 'error' : ''}`}>
            {isAuthenticated ? "Logged in Successfully!" : "Invalid Credentials. Please try again."}
          </div>
        )}
        <input type = "text"
          placeholder="Enter email"
          value = {email}
          onChange ={(e) => setEmail(e.target.value)} />
        <input type = "text"
        placeholder='Enter password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)} />
        <button onClick = {handleLogin}>Login</button> 
    </div>
    </div>
 )
}
export default Login;