import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header'

class App extends Component {

  state={
    calendarArray: [],
  }

  componentDidMount(){
    this.getCalendar();
  }

  getCalendar() {
    axios({
      method: 'GET',
      url: '/calendar'
    })
    .then((response) => {
      this.setState({
        calendarArray: response.data
      })
    })
    .catch((err) => {
      console.log(`Error in GET: ${err}`)
    }
    )
  }

  render() {

    console.log(this.state.calendarArray);
    return (
      <div className="App">
        <Header />
        <br/>
        <MonthList calendarArray={this.state.calendarArray} setHeader={this.setHeader} />
      </div>
    );
  }
}

export default App;
