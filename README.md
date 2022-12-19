# TileTopia

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Table of Contents
  - [App Planning](#APP-PLANNING)
  - [Stretch Goals](#stretch-goals)
  <!-- - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#testing)
  - [Questions](#question) -->


# === APP-PLANNING ===
## notes and homestead tile example 
<Tile 
    id="A1"
    tileId='1'  
    tileName="Homestead" 
    baseTileCost="5" 
    upgradeCost={baseCost*50} 
    buyAnotherItem={baseCost*25}
    collectAfterSeconds="10" 
    baseEarnings="5" 
    isUnlocked
    upgradeLevel="1"
    itemCount="1"
>

## locked tile class
- if this.props.isUnlocked = true/false (boolean)
    - this.props.isUnlocked ? className=" HomeStead" : className=" Locked"

## only buy tile if tile to the left is unlocked
- check tile id-1 is unlocked                                           <<<<<<<<<<<<<<<<<<<<<<<<
    - document.getelementbyid("A1") check if prop.isUnlocked
- list of unlocked tiles ?
    - state= unlockedTiles = { {A: [1,2,3]}, {B: [1,2,3]}}

# === BASE TASKS / MVP ===
- login/authentication (DB)
- save game (DB)
    - save state
        - tileStateArray? get states from each tile (save what tiles are unlocked, upgradeLevel, itemCount etc... )

- locked tile class

- buy a tile
    - first tile free - makes 5 coins every 10 seconds
    - `<Tile baseTileCost="5" >`
    - onclick check `totalCurrency > baseTileCost && `
        - if : unlock tile and start incrementing
        - else : alert (for now) "not enough money!"

- earn money
    - pull from tiles timer  
    - `<Tile collectAfterSeconds="10">` 
    - increment total currency (state)
        -  passive collect 
        - >> click to collect <<

- buy another tile

- upgrade a tile
    - `baseTileCost * 50`
    - decrease `collectAfterSeconds` - decrease by 2 seconds
    - `<Tile upgradeLevel="1">`
    - **how to track upgradeLevel?**                                    <<<<<<<<<<<<<<<<<<<<<<<<  
    
- number of items owned (buying another homestead on homestead tile)
    - `baseTileCost * 25`
    - increase earnings ( `<Tile baseEarnings="5">` ) - increase by 5 coins (baseEarnings * 5)
    - **how to track itemCount?**                                    <<<<<<<<<<<<<<<<<<<<<<<<  


## stretch-goals

- tileRowId="A" & tileColumnId='1'
    - row - era - ABC
    - column - tile - 123
- multiple rows
- choose avatar? 

![Frontend Progress](./client/src/Assets/desktop.png)
![Frontend Progress](./client/src/Assets/tablet.png)
![Frontend Progress](./client/src/Assets/mobile.png)
![Frontend Progress](./client/src/Assets/progress.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.