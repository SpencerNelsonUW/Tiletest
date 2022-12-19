import classes from "./Tile.css";
import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tile(props) {

  let [ItemsOwned, setItemsOwned] = useState(0);
  const [load, setLoad] = React.useState(true);

  function AddItem() {
    if(props.ItemCost <= props.totalCurrency){
      setItemsOwned(++ItemsOwned);
      props.decrementCurrency(props.ItemCost)
      console.log(props.tileName, "ItemsOwned", ItemsOwned);

      setLoad(false)
       
    } else {
      console.log("not enough money!")
    }

    // TODO: should eventually save into db so you dont have to restart every time
  }
 
  function collectEarnings () {
    if ( ItemsOwned >= 1 && !props.eraTile){
      
      var earnings = Number(props.baseEarnings) * ItemsOwned
      console.log("collecting ", earnings ,"for ",props.tileName , "in tile.js")
      props.incrementCurrency( earnings )
      
      setLoad(true)
      setTimeout(() => {
        setLoad(false)
      },  props.collectAfterSeconds * 1000);// multiply for milliseconds
    }
  }

 

  if (props.eraTile) {
    return (
      <div className="era">
        <h1> {props.tileName} </h1>
        <FontAwesomeIcon className="icon" icon={props.icon} />
      </div>
    );
  } else if (props.locked) {
    return (
      <div className="tile locked">
        <h1> {props.tileName} </h1>
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <h1> complete Pioneers to Unlock</h1>
      </div>
    );
  } else {
    return (
      <div className="tile">

        <div className="title">
          <h1> {props.tileName}s :</h1> 
          <h1>{ItemsOwned}</h1>
        </div>
        
        <FontAwesomeIcon className="icon" icon={props.icon} />

        <div className="button-container">

          <button className="buy" onClick={AddItem}>
            Buy for {props.ItemCost}c  
          </button>

          <button className="collect" onClick={collectEarnings} disabled={load}>
            collect {Number(props.baseEarnings) * ItemsOwned}c  
          </button>
        </div>
 

      </div>
    );
  }
}
