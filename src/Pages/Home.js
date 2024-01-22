import React from "react";
import Login from "../Components/Auth/Login";
import { UserAuth } from "../Context/AuthContex";
import { Navigate } from 'react-router-dom';

const Home = () => {
  const {user} = UserAuth();

  return (
    <>
        {/* <h1 style={{color:'white'}}>HOME</h1> */}
        <div style={{display:'flex', justifyContent:'center',
                  alignContent:'center', paddingTop:50}}>
          {!user ? <Login/> : <Navigate to='/bets'/>}          
        </div>
        
    </>
  );
}

export default Home;
