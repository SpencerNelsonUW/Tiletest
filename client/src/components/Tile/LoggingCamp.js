import React, { Component, useState } from "react";
// import tree from "../../GameImages/tree.jpeg";

export default function Camp() {
  let [CampsOwned, setCampsOwned] = useState(0);

  function AddCamp() {
    setCampsOwned(CampsOwned++);
    console.log(CampsOwned);
    // TODO: should eventually save into db so you dont have to restart every time
  }

  // function confirmAddCamp() {
  //   alert("You bought 1 Camp!");
  // }

  return (
    <div className="tile">
      <h1># of Logging Camps Owned:{CampsOwned}</h1>
      {/* <h1>{this.props.children}</h1> */}
      <button style={{ height: "40px", fontSize: "10px" }} onClick={AddCamp}>
        Buy 1 Camp for 100 coins
      </button>
      {/* <img src={tree} height="45px"></img> */}
    </div>
  );
}
