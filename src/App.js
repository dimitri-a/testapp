import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'

class App extends Component {
  render() {
    let Title='Sydney weather';
    let icon='http://openweathermap.org/img/w/10d.png'
    let degrees='26';
    return (
      <div className="App">
      <Widget title={Title} className ="imaag" icon={icon} degrees={degrees}></Widget>
       
      </div>
    );
  }
}

export default App;
