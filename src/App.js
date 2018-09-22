import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'
import axios from 'axios';
import { debug } from 'util';

class App extends Component {

  constructor() {
    super();
    this.state = { degrees: 0, title: '', lat: 0, lon: 0, unitsType: 'metric', wind: '', location: '' };
  }

  componentDidMount() {
    this.handleTempChange();
  }

  handleTempChange = (event) => {
    //console.log(this.radio.val);
    this.setState({ 'unitsType': this.state.unitsType === 'metric' ? 'imperial' : 'metric' })

    //todo remove http://api.openweathermap.org/data/2.5/weather?lat=-3.8197&lon=11.0067&appid=c7b5b62a01a84a2d274930a57e180950
    const APPKEY = 'c7b5b62a01a84a2d274930a57e180950';
    let url = 'https://samples.openweathermap.org/data/2.5/weather';

    axios("https://api.ipdata.co/?api-key=test").then((data) => {
      this.setState({ lon: data.data.longitude, lat: data.data.latitude });
      fetch('http://localhost:4000/weather/' + this.state.lat + '/' + this.state.lon + "/" + this.state.unitsType)
        .then(res => res.json())
        .then(json => {
          console.log('temp', json)
          this.setState({
            icon: json.weather[0].icon,
            degrees: json.main.temp,
            wind: json.wind.speed,
            location: json.main.location
          })
        });
    });
  }


  handleChange = () => {
    console.log('change', this.val.value);
    this.setState({ 'title': this.val.value });
  }

  render() {
    return (
      <div class="container">
        <div class="row list-row">
          <div class="col-lg-5">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Title placeholder" onChange={this.handleChange} ref={(node) => { this.val = node }} value={this.state.value} name="title" />

            <label for="temp">Temperature</label>



            <span id="tempArea">

              <span className=''>
                <input type="radio" id="c" value="metric" onChange={this.handleTempChange} checked={this.state.unitsType === "metric"} className='spaceradio' />
                <label for="c" className="radios">C</label>
              </span>

              <span className=''>
                <input type="radio" id="f" value="imperial" onChange={this.handleTempChange} checked={this.state.unitsType === "imperial"} className='' />
                <label for="f" className="radios">F</label>
              </span>

            </span>



            <br />
            <span id="windArea">
              <input type="radio" id="one" name="first_item" value="1" className='spaceradio' />
              <label for="one" className="radios">On</label>
              <input type="radio" id="one" name="first_item" value="2" className='spaceradio' />
              <label for="two">Off</label>
            </span>

          </div>
          <div class="border col-lg-5"><Widget degrees={this.state.degrees} unitsType={this.state.unitsType} title={this.state.title} icon={this.state.icon} location={this.state.location} wind={this.state.wind}></Widget></div>
        </div>
      </div>
    );
  }
}

export default App;
