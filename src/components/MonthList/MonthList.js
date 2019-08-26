import React, { Component } from 'react';


class MonthList extends Component {
  render() {
      console.log(this.props.calendarArray)

      let calendar = this.props.calendarArray.map((month, i) => {
            return (
                    <li key={month.id}>{month.name}</li>
            )
      })
    return (
      <div>
          <ul>{calendar}</ul>
      </div>
    );
  }
}

export default MonthList;