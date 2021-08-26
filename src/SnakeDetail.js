import React from "react";

function SnakeDetail({ snakes }) {
  const [name, sci_name, picture, venomous, max_length, diet] = snakes;
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
