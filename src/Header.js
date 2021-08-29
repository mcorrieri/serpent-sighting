import React from "react";
import { useHistory } from "react-router";

function Header() {
  let history = useHistory();

  function handleUserInfo() {
    history.push("/userinfo");
  }

  return (
    <div>
      <button onClick={handleUserInfo}>Account</button>
    </div>
  );
}

export default Header;
