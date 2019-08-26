import React, { Component } from 'react';


class MonthItem extends Component {
  render() {
    return (
      <div>
          <li>{this.props.month.name}</li>
      </div>
    );
  }
}

export default MonthItem;