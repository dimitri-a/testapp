import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'
import axios from 'axios';
import { debug } from 'util';
import RadioButtons from './RadioButtons';

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


  handleTitleChange = () => {
    console.log('change', this.val.value);
    this.setState({ 'title': this.val.value.toUpperCase() });
  }

  handleWindChange = () => {
    this.setState({ 'wind': this.state.wind ? false : true });
  }

  render() {
    return (

      <div className="left">
        <hr className="container hline"></hr>

        <div id="main" className="container border">
          <div className="row">
            <div className="col-lg-5 top">
              <label for="title">Title</label>
              <input id="title" type="text" placeholder="Title placeholder" onChange={this.handleChange} ref={(node) => { this.val = node }} value={this.state.value} name="title" className="text" />

              <RadioButtons
                id={'tempArea'}
                labelText={'Temperature'}
                value1={'metric'}
                value2={'imperial'}
                handleChange={this.handleTempChange}
                stateVar={this.state.unitsType}
                radio1Value='&#8451;'
                radio2Value='&#8457;'

              />

              <RadioButtons
                id={'windArea'}
                labelText={'Wind'}
                value1={true}
                value2={false}
                handleChange={this.handleWindChange}
                stateVar={this.state.wind}
                radio1Value={true}
                radio2Value={false}

              />

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
