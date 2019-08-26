import React, { Component } from 'react';


class Header extends Component {
  render(){ 
    return (
        <div>
         <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <h3>SELECTED MONTH GOES HERE</h3>
        <br/>
        </header>
        </div>    
    )
  }
}

export default Header;