import React, { useState } from "react";
import { useHistory } from "react-router";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    history.push("/signup");
  }

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        console.log("userInfo", userInfo);
        if (userInfo.message) {
          alert(userInfo.message);
        } else {
          localStorage.token = userInfo.token;
          history.push("/home");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          <input
            type="text"
            placeholder="Username"
            autoComplete="on"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Not a member? Signup</button>
      </form>
    </div>
  );
}

export default Login;
