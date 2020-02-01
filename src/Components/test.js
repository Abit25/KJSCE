import React from "react";
import axios from "axios";

const handleClick = () => {
  console.log("Clicked");
};

const Test = () => {
  return (
    <div>
      <a href="http://localhost:8080/auth/logout">
        <button onClick={handleClick}>LOGOUT</button>
      </a>
    </div>
  );
};

export default Test;
