import React, { useState } from 'react';
import './Login.css' 
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContex';

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {createUser, signIn} = UserAuth();

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
        //await createUser(email, password);
        if (isRegister) {
          // Call create user function for sign-up
          await createUser(email, password);
        } else {
          // Call sign-in function for sign-in
          await signIn(email, password);
          navigate('/bets');
        }
    } catch(e) {
        setError(e.message);
        console.log(e.message)
    }
  };


  return (
    <div className={`container ${isRegister ? 'active' : ''}`}>
      <div className={`form-container ${isRegister ? 'sign-up' : 'sign-in'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isRegister ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>{isRegister ? 'or use your email for registration' : 'or use your email password'}</span>
          {isRegister && <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />}
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          {/* {isRegister && <button>Sign Up</button>} */}
          {!isRegister && <a href="#">Forget Your Password?</a>}
          <button>{isRegister ? 'Sign Up' : 'Sign In'}</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className={`hidden ${!isRegister ? 'active' : ''}`} onClick={handleToggle}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className={`hidden ${isRegister ? 'active' : ''}`} onClick={handleToggle}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;