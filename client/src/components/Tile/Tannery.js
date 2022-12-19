import React, { Component, useState } from "react";
// import cow from "../../GameImages/cow.png";

export default function Tannery() {
  let [TannerysOwned, setTannerysOwned] = useState(0);

  function AddTannery() {
    setTannerysOwned(TannerysOwned++);
    console.log(TannerysOwned);
    // TODO: should eventually save into db so you dont have to restart every time
  }

  // function confirmAddTannery() {
  //   alert("You bought 1 Tannery!");
  // }

  return (
    <div className="tile">
      <h1>
        # of Tannerys <br></br>Owned:{TannerysOwned}
      </h1>
      {/* <h1>{this.props.children}</h1> */}
      <button style={{ height: "40px", fontSize: "10px" }} onClick={AddTannery}>
        Buy 1 Tannery for 100 coins
      </button>
      {/* <img src={cow} height="45px"></img> */}
    </div>
  );
}
