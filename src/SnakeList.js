import React, { useState, useEffect } from "react";
import SnakeDetail from "./SnakeDetail";

function SnakeList() {
  const [snakelist, setSnakelist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/snakes")
      .then((res) => res.json())
      .then((data) => {
        setSnakelist(data);
      });
  }, []);

  const snakes = snakelist.map((snake) => {
    return (
      <div>
        <h3 key={snake.id}>{snake.name}</h3>
      </div>
    );
  });

  //   const handleClick = () => {
  //     return <SnakeDetail snakes={snakes} />;
  //   };

  return (
    <div>
      <h3>{snakes}</h3>
    </div>
  );
}

export default SnakeList;
