import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tile from "./components/Tile/Tile";
import Homestead from "./components/Tile/Homestead";
import LoggingCamp from "./components/Tile/LoggingCamp";
import Tannery from "./components/Tile/Tannery";
import React, { useState } from "react";
import Login from "./components/Preferences/Login/Login";

import {
  faHatCowboySide,
  faHouse,
  faCow,
  faTree, // Pioneers
  faCrown,
  faGem,
  faShieldHalved,
  faChessRook, // Medieval
} from "@fortawesome/free-solid-svg-icons";

function App() {
  
  const [token, setToken] = useState();
  // error for reassigning const var
  var [totalCurrency, setTotalCurrency] = useState(10); // 10 defualt state value 
  var username= window.localStorage.getItem("username");
  var civName= window.localStorage.getItem("civName");

  console.log(username, civName)

  function handleIncrementCurrency (amount) {
    var newCurrency = totalCurrency + amount
    console.log("incrementing total currency from ",totalCurrency," to ", newCurrency)
    setTotalCurrency(newCurrency)
  }
  function handleDecrementCurrency (amount) {
    var newCurrency = totalCurrency - amount
    console.log("decrementing total currency from ",totalCurrency," to ", newCurrency)
    setTotalCurrency(newCurrency)
  }

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Header ruler={username} civ={civName} currency={totalCurrency}></Header>
      <Display>
        <div className="row">
          <Tile 
            eraTile 
            tileName="Pioneers" 
            icon={faHatCowboySide}
            ></Tile>
          <Tile 
            tileName="HomeStead" 
            ItemCost="1" 
            icon={faHouse} 
            baseEarnings="10" 
            collectAfterSeconds="10" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            ></Tile>
          <Tile 
            tileName="Tannery" 
            ItemCost="50" 
            icon={faCow} 
            baseEarnings="25" 
            collectAfterSeconds="20" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            ></Tile>
          <Tile 
            tileName="Logging Camp" 
            ItemCost="100" 
            icon={faTree} 
            baseEarnings="50" 
            collectAfterSeconds="30" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            ></Tile>
        </div>

        <div className="row">
          <Tile 
            eraTile 
            tileName="Medieval" 
            icon={faCrown} 
            baseEarnings="50" 
            collectAfterSeconds="30" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            locked
            ></Tile>
          <Tile 
            tileName="Quarry" 
            ItemCost="350" 
            icon={faGem} 
            baseEarnings="50" 
            collectAfterSeconds="30" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            locked
            ></Tile>
          <Tile
            tileName="Blacksmith"
            ItemCost="600"
            icon={faShieldHalved}
            baseEarnings="50" 
            collectAfterSeconds="30" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            locked
          ></Tile>
          <Tile
            tileName="Castle"
            ItemCost="1000"
            icon={faChessRook}
            baseEarnings="50" 
            collectAfterSeconds="30" 
            incrementCurrency={handleIncrementCurrency} 
            decrementCurrency={handleDecrementCurrency} 
            totalCurrency={totalCurrency}
            locked
          ></Tile>
        </div>
      </Display>
      <Footer></Footer>
    </div>
  );
}

export default App;
