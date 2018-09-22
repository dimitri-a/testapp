import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'
import axios from 'axios';
import { debug } from 'util';

class App extends Component {

  constructor() {
    super();
    this.state = { degrees: 0, title: '', lat: 0, lon: 0, unitsType: 'metric' };
  }

  componentDidMount() {
    this.handleTempChange();
  }

  handleTempChange = (event) =>{
    //console.log(this.radio.val);
    this.setState({'unitsType':this.state.unitsType === 'metric'? 'imperial': 'metric'})
  }

  // handleTempChange = (event) => {
  //   if (event) {
  //     this.setState({
  //       unitsType: event.target.value
  //     });
  //   }
  // }


  handleChange = () => {
    console.log('change', this.val.value);
    this.setState({ 'title': this.val.value });
  }

  render() {
    return (
      <div class="container">
        <div class="row list-row">
          <div class="border col-lg-6">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Title placeholder" onChange={this.handleChange} ref={(node) => { this.val = node }} value={this.state.value} name="title" />

            <label for="temp">Temperature</label>



            <span id="tempArea">
              <input type="radio" id="c" value="metric" onChange={this.handleTempChange} checked={this.state.unitsType === "metric"} className='spaceradio' />
              <label for="c" className="radios">C</label>
              <input type="radio" id="f" value="imperial" onChange={this.handleTempChange} checked={this.state.unitsType === "imperial"} className='spaceradio' />
              <label for="f" className="radios">F</label>
            </span>



            <br />
            <span id="windArea">
              <input type="radio" id="one" name="first_item" value="1" className='spaceradio' />
              <label for="one" className="radios">On</label>
              <input type="radio" id="one" name="first_item" value="2" className='spaceradio' />
              <label for="two">Off</label>
            </span>

          </div>
          <div class="border col-lg-6"><Widget degrees={this.state.degrees} title={this.state.title} icon={this.state.icon}></Widget></div>
        </div>
      </div>
    );
  }
}

export default App;
