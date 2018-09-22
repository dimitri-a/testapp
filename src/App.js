import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'
import axios from 'axios';
import { debug } from 'util';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { icon: '', degrees: 0, title: 'bla', lat: 0, lon: 0 };
  }

  componentDidMount() {

    //todo remove http://api.openweathermap.org/data/2.5/weather?lat=-3.8197&lon=11.0067&appid=c7b5b62a01a84a2d274930a57e180950
    const APPKEY = 'c7b5b62a01a84a2d274930a57e180950';
    let url = 'https://samples.openweathermap.org/data/2.5/weather';

    axios("https://api.ipdata.co/?api-key=test").then((data) => {
      this.setState({ lon: data.data.longitude, lat: data.data.latitude });

      // console.log('lat', this.state.lat);
      // console.log('lon', this.state.lon);

      fetch('http://localhost:4000/weather/' + this.state.lat + '/' + this.state.lon)
        .then(res => res.json())
        .then(json => {
          this.setState({
            icon: json.weather[0].icon,
            degrees: json.weather[0].degrees,
          })
        });
    });
  }


  handleChange = ()=>{
    debugger;
    console.log('change',this.val.value);
    this.setState({'title':this.val.value});
  }

  render() {
    return (
      <div class="container">
        <div class="row list-row">
          <div class="border col-lg-6">
            <label for="title">Title</label>
            <input id="title" type="text" onChange={this.handleChange} ref={(node) => { this.val = node }} value={this.state.value}  name="title" />
            <label for="temp">Temperature</label>

            <span id="tempArea">
              <input type="radio" id="one" name="first_item" value="1" className='spaceradio' />
              <label for="one" className="radios">C</label>
              <input type="radio" id="one" name="first_item" value="2" className='spaceradio' />
              <label for="two">F</label>
            </span>

            <br />
            <span id="windArea">
              <input type="radio" id="one" name="first_item" value="1" className='spaceradio' />
              <label for="one" className="radios">On</label>
              <input type="radio" id="one" name="first_item" value="2" className='spaceradio' />
              <label for="two">Off</label>
            </span>

          </div>
          <div class="border col-lg-6"><Widget degrees={2} title={'Title blaat'} icon={this.state.icon}></Widget></div>
        </div>
      </div>
    );
  }
}

export default App;
