import React, { useState } from 'react';
import './Login.css' 
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContex';
import { mapFirebaseErrorToUserMessage } from '../../Constants/Constants'
import { GoogleButton } from 'react-google-button'

const Login = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const {createUser, signIn, resetPassword, googleSignIn} = UserAuth();

  const handleToggle = () => {
    setSuccessMsg('');
    setError('');
    setIsRegister(!isRegister);
  };

  const handleForgotPassword = async () => {
    setError('');
    setSuccessMsg('');
    if (email === ''){
      setError('Enter your email address to receive a password reset link.')
      return;
    }
    try {
      await resetPassword(email);
      setSuccessMsg("Password reset email sent. Check your email for further instructions.")
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      const userFriendlyErrorMessage = mapFirebaseErrorToUserMessage(error.message);
      setError(userFriendlyErrorMessage);
      console.log(error.message);
      console.error('Error sending password reset email:', error.message);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setError('');
    try{
        //await createUser(email, password);
        if (isRegister) {
          await createUser(email, password, userName);
        } else {
          // Call sign-in function for sign-in
          await signIn(email, password);
          navigate('/bets');
        }
    } catch(e) {
        const userFriendlyErrorMessage = mapFirebaseErrorToUserMessage(e.message);
        setError(userFriendlyErrorMessage);
        console.log(e.message)
    }
  };

  const handleGoogleSignIn = async () => {
      try {
        await googleSignIn(); 
      } catch (error) {
        console.log(error);
      }
  }


  return (
    <div className={`container ${isRegister ? 'active' : ''}`}>
      <div className={`form-container ${isRegister ? 'sign-up' : 'sign-in'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isRegister ? 'Create Account' : 'Sign In'}</h1>
          <div className="social-icons">
            {/* <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a> */}
            <GoogleButton type="light" onClick={handleGoogleSignIn} />
          </div>
          <span>{isRegister ? 'or use your email for registration' : 'or use your email password'}</span>
          {isRegister && <input required onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Name" />}
          <input required onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input required onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          {(error && <p className='error'>{error}</p>) || (successMsg && <p className='success'>{successMsg}</p>)}

          {/* {error !== '' ? <p className='error'>{error}</p> : successMsg !== '' ? <p className='success'>{successMsg}</p> } */}
          {/* {isRegister && <button>Sign Up</button>} */}
          {!isRegister && <a onClick={handleForgotPassword} href="#">Forget Your Password?</a>}
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