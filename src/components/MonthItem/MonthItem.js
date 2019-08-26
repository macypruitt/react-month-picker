import React, { Component } from 'react';


class MonthItem extends Component {
  
    clickAlert = (event) => {
    
        let alertText=event.target.dataset.name;
        alert(alertText);
    }
  
    render() {

    return (
      <div>
          <li data-name={this.props.month.name} onClick={this.clickAlert}>
            {this.props.month.name}
          </li>
      </div>
    );
  }
}

export default MonthItem;