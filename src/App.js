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

    const APPKEY = 'c7b5b62a01a84a2d274930a57e180950';
    let url = 'https://samples.openweathermap.org/data/2.5/weather';


    axios("https://api.ipdata.co/?api-key=test", function (response) {

      this.setState({ lon: response.long, lat: response.lat });

      axios(url + '?lat=' + this.state.lon + '&lat=' + this.state.lat + '&' + 'appid=' + APPKEY).then((data) => {
        this.setState({
          icon: data.icon,
          degrees: data.degrees,

        })
      });
    });




  }

  render() {
    return (
      <div className="App">
        <Widget title={this.state.title} className="imaag" icon={this.state.icon} degrees={this.state.degrees}></Widget>

      </div>
    );
  }
}

export default App;
