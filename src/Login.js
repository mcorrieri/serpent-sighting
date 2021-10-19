import React from "react";
import { useHistory } from "react-router";

function Login(user) {
  let history = useHistory();

  function handleSignup() {
    history.push("/signup");
  }

  const handleLogin = () => {
    console.log("LOGIN LOL");
  };

  console.log(user);

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          <input type="text" placeholder="Username" autoComplete="on" />
        </label>
        <label>
          <input type="password" placeholder="Password" autoComplete="on" />
        </label>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Not a member? Signup</button>
      </form>
    </div>
  );
}

export default Login;
