import React from "react";

function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          <input type="text" placeholder="Username" autoComplete="on" />
        </label>
        <label>
          <input type="password" placeholder="Password" autoComplete="on" />
        </label>
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
