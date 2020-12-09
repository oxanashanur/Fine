import React from "react";

import "./app-header.css";
import logotype from "./logo.svg";

const AppHeader = () => {
  return (
    <div className="app-header d-flex">
      <ul className="">
        <li className="nn">
          <h1>
            {" "}
            <img
              src={logotype}
              className="rounded float-left"
              alt="logo"
              width="5px"
              height="5px"
            ></img>
            ШТРАФОВ
          </h1>
          <h2>НЕТ</h2>
        </li>
        <li className="nn">
          <h3>Получение информации о штрафе по УИН</h3>
        </li>
      </ul>
    </div>
  );
};

export default AppHeader;
