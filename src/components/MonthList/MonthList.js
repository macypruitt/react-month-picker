import React, { Component } from 'react';
import MonthItem from '../MonthItem/MonthItem'

class MonthList extends Component {
  render() {
      console.log(this.props.calendarArray)

      let calendar = this.props.calendarArray.map((month, i) => {
            return (
                    <MonthItem key={month.id} month={month} />
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