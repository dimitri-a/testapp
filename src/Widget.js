import React from 'react'

export default ({ title, icon, degrees, wind, location,unitsType }) => {

    console.log(degrees);
    return (
        <div className="border">
            <span>{title}</span>
            <div class="row list-row">
                <div class="border col-lg-6">
                    <img src={'http://openweathermap.org/img/w/' + icon + '.png'}></img>
                </div>
                <div class="border col-lg-6">

                    <br />
                    {location}
                    <h2>{degrees}</h2>
                    <h3>wind{wind} {unitsType==='metric'? <span>km/h</span> :<span>mph</span>}</h3>
                </div>
            </div>
        </div>
    )
}
