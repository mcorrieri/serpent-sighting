import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function SnakeDetail() {
  const [snakeDetail, setSnakeDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/snakes/${id}`)
      .then((res) => res.json())
      .then((snake) => {
        setSnakeDetail(snakeDetail);
        console.log(snakeDetail);
      });
  }, [id, snakeDetail]);

  const { name, picture, sci_name, venomous, max_length, diet } = snakeDetail;

  return (
    <div>
      <h3>{name}</h3>
      <img src={picture} alt="snake" />
      <h4>{sci_name}</h4>
      <h4>Venomous:{venomous}</h4>
      <h4>{max_length} inches</h4>
      <h4>{diet}</h4>
    </div>
  );
}

export default SnakeDetail;
