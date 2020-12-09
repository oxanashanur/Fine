import React from "react";

import "./fine-off.css";
import img from "./search.jpg";

const FineOff = () => {
  return (
    <div className="text-center">
      <img src={img} class="" alt="img"></img>
      <div className="card-body">
        <h1>Штраф {1} не найден</h1>
      </div>
    </div>
  );
};

export default FineOff;
