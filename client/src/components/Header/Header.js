import React, {Component} from 'react';

import classes from './Header.css'

class Header extends Component {
    render(){
        return(
        <div className='Header'>
            <h1>Ruler: {this.props.ruler}</h1>
            <h2>Civilization Name: {this.props.civ}</h2>
            <h4>Total Currency: {this.props.currency}</h4>
        </div> 
        )
   } 
}



export default Header;