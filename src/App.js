import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { icon: '', degrees: 0, title: '', lat: 0, lon: 0 };
  }

  componentDidMount() {

    //todo remove http://api.openweathermap.org/data/2.5/weather?lat=-3.8197&lon=11.0067&appid=c7b5b62a01a84a2d274930a57e180950
    const APPKEY = 'c7b5b62a01a84a2d274930a57e180950';
    let url = 'https://samples.openweathermap.org/data/2.5/weather';

    axios("https://api.ipdata.co/?api-key=test").then((data) => {

      this.setState({ lon: data.data.longitude, lat: data.data.latitude });

      console.log('lat', this.state.lat);
      console.log('lon', this.state.lon);

      fetch('http://localhost:4000/weather/' + this.state.lat + '/' + this.state.lon).then((res) => {
        this.setState({
          icon: res.icon,
          degrees: res.degrees,
        })
      });

    });

  }

  render() {
    return (
      <div class="grid-container">
        <div class="left-griditem">
          <label for="name">Name</label>
          <input id="name" type="text" name="name" />
          <label for="temp">Gender</label>

          <label for="one">Male</label>
          <input type="radio" id="one" name="first_item" value="1" />

          <label for="two">Female</label>
          <input type="radio" id="one" name="first_item" value="2" />

        </div>
        <div class="right-griditem">
          <Widget title={this.state.title} className="imaag" icon={this.state.icon} degrees={this.state.degrees}></Widget>
        </div>
      </div>
      // <div className="App">

      //   
      // </div>




    );
  }
}

export default App;
