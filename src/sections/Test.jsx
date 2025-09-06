import React from "react";
import bigShoe1 from "../assets/images/big-shoe1.png"; // ⛔ NOT from index.js — direct path

const Test = () => {
  console.log("TEST IMAGE:", bigShoe1);
  return (
    <div>
      <h1>Direct Image Import Test</h1>
      <img
        src={bigShoe1}
        alt="Test Shoe"
        style={{ width: "300px", border: "2px solid red" }}
      />
    </div>
  );
};

export default Test;
