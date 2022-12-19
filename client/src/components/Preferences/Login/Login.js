import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from './Login.css'

async function loginUser(credentials) {

  setLocalStorage(credentials)
  // api server running on 3001/holds test token : "test123"
    return fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) =>  data.json() );
 
}

async function setLocalStorage(credentials){
  console.log("setting local storage", credentials)

  window.localStorage.setItem("username", credentials.username);
  window.localStorage.setItem("civName", credentials.civName);
}


export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [civName, setCivName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // this returns default token hardcoded in server/server.js : "test123"
    const LoginToken = await loginUser( {
      username, password, civName
    });
    console.log("setting LoginToken", LoginToken)
    setToken(LoginToken);
  };

  return (
    <div className="Login">
      <h1>Sign Up</h1>
      <h4>Create a new Civilization!</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Civilization Name</p>
          <input
            type="text"
            onChange={(e) => setCivName(e.target.value)}
          />
        </label>

        <label>
          <p>Username</p>
          <input
           type="text" 
           onChange={(e) => setUserName(e.target.value)} />
        </label>

        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
