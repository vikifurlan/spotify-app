import React from "react";
import "./index.css";
const Card = ({image,titulo,subtitulo}) => {
  return (
    <div className="container_card">
      <img src={image}/>
      <div className="container_titles">
        <h4>{titulo}</h4>
        <p>{subtitulo}</p>
      </div>
    </div>
  );
};

export default Card
