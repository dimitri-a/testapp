import React from 'react'

export default ({ title, icon, degrees, wind, location,unitsType,speed }) => {
 return (
        <div className="border">
            <span>{title}</span>
            <div class="row">
                <div class="border col-lg-6">
                    <img src={'http://openweathermap.org/img/w/' + icon + '.png'}></img>
                </div>
                <div class="border col-lg-6">
                    <br />
                    {location}
                    <h2>{degrees}{unitsType==='metric' ? <label>&#8451;</label> :  <label>&#8457;</label>}</h2>
                    {wind && <h3>wind{speed} {unitsType==='metric'? <span>km/h</span> :<span>mph</span>}</h3>}
                </div>
            </div>
        </div>
    )
}
