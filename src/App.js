import "./App.css";
import SnakeList from "./SnakeList";
import { Switch, Route } from "react-router-dom";
import SnakeDetail from "./SnakeDetail";

function App() {
  return (
    <div className="App">
      <h2>Maryland Snakes</h2>
      <Switch>
        <Route path="/">
          <SnakeList />
        </Route>
        <Route path="/snake:id">
          <SnakeDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
