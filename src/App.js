import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SnakeList from "./SnakeList";
import SnakeDetail from "./SnakeDetail";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h2>Maryland Snakes</h2>
      <Switch>
        <Route exact path="/">
          <Login user={user} />
        </Route>
        <Route exact path="/signup">
          <Signup user={user} />
        </Route>
        <Route path="/home">
          <SnakeList />
        </Route>
        <Route exact path="/snake:id">
          <SnakeDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
