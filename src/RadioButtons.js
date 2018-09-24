import React, { Component } from 'react'

export default ({id, labelText, value1, value2, stateVar, handleChange, radio1Value, radio2Value}) => {
return (
        <div className='top'>
            <label htmlFor="radio">{labelText}</label>
            <div id={id} className="row">
                <span className='col-lg-6'>
                    <input type="radio" id="one" value={value1} onChange={handleChange} checked={stateVar === value1} className='spaceradio'/>
                    <label htmlFor="one">{radio1Value}</label>
                </span>
                <span className='col-lg-6'>
                    <input type="radio" id="two" value={value2} onChange={handleChange} checked={stateVar === value2} className="spaceradio" />
                    <label htmlFor="two">{radio2Value}</label>
                </span>
            </div>
        </div>
    )
}