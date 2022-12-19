import React, { Component, useEffect, useState } from "react";
// import barn from "../../GameImages/barn.jpeg";

export default function Homestead() {
  let [HomesteadsOwned, setHomesteadsOwned] = useState(0);

  function AddHomestead() {
    setHomesteadsOwned(HomesteadsOwned++);
    console.log(HomesteadsOwned);
    // TODO: should eventually save into db so you dont have to restart every time
  }

  // function confirmAddHomestead() {
  //   alert("You bought 1 Homestead!");
  // }

  return (
    <div className="tile">
      <h1># of Homesteads Owned:{HomesteadsOwned}</h1>
      {/* <h1>{this.props.children}</h1> */}
      <button
        style={{ height: "40px", fontSize: "10px" }}
        onClick={AddHomestead}
      >
        Buy 1 Homestead for 50 coins
      </button>
      {/* <img src={barn} height="40px"></img> */}
    </div>
  );
}
