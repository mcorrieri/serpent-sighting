import React from "react";

function Login({ user }) {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          <input type="text" placeholder="Username" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
      </form>
    </div>
  );
}

export default Login;
