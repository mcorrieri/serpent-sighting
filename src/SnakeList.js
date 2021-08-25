import React, { useState, useEffect } from "react";

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
    return <h3 key={snake.name}>{snake.name}</h3>;
  });

  return (
    <div>
      <ul>{snakes}</ul>
    </div>
  );
}

export default SnakeList;
