import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'
import axios from 'axios';
import { debug } from 'util';

class App extends Component {

  constructor() {
    super();
    this.state = { degrees: 0, title: '', lat: 0, lon: 0, unitsType: 'metric', wind: false, speed: 0, location: '' };
  }

  componentDidMount() {
    this.handleTempChange();
  }

  handleTempChange = () => {
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
            wind: this.state.wind,
            speed: json.wind.speed,
            location: json.name
          })
        });
    });
  }


  handleChange = () => {
    console.log('change', this.val.value);
    this.setState({ 'title': this.val.value.toUpperCase() });
  }

  handleWind = () => {
    this.setState({ 'wind': this.state.wind ? false : true });
  }

  render() {
    return (

      <div className="left">
          <hr className="container"></hr>
        
        <div id="main" className="container border">
          <div className="row">
            <div className="col-lg-5 top">
              <label for="title">Title</label>
              <input id="title" type="text" placeholder="Title placeholder" onChange={this.handleChange} ref={(node) => { this.val = node }} value={this.state.value} name="title" className="text"/>
              <label for="temp">Temperature</label>

              <span id="tempArea" className="row">
                <span className='col-lg-4'>
                  <input type="radio" id="c" value="metric" onChange={this.handleTempChange} checked={this.state.unitsType === "metric"} className='spaceradio' />
                  <label for="c" className="radios">&#8451;</label>
                </span>
                <span className='col-lg-4'>
                  <input type="radio" id="f" value="imperial" onChange={this.handleTempChange} checked={this.state.unitsType === "imperial"} className='spaceradio' />
                  <label for="f" className="radios">&#8457;</label>
                </span>
              </span>
              <br />
              <label for="temp">Wind</label>
              <span id="windArea" className="row">
                <span className='col-lg-4'>
                  <input type="radio" id="n" value="true" onChange={this.handleWind} checked={this.state.wind === true} className='spaceradio' />
                  <label for="n" className="radios">On</label>
                </span>
                <span className='col-lg-4'>
                  <input type="radio" id="o" value="false" onChange={this.handleWind} checked={this.state.wind === false} className='spaceradio' />
                  <label for="o" className="radios">Off</label>
                </span>
              </span>
            </div>
            <div className="divider"></div>
            <div className="col-lg-5 top">
              <Widget degrees={this.state.degrees} unitsType={this.state.unitsType} title={this.state.title} icon={this.state.icon} location={this.state.location} wind={this.state.wind} speed={this.state.speed}></Widget></div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
