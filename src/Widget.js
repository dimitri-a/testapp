import React from 'react'

export default ({ title, icon, degrees, wind, location, unitsType, speed }) => {
    return (
        <div className="widget">
            <div className="row">
                <div className="col-lg-12 title">{title}</div>
            </div>

            <div className="row widgettop">
                <div className="col-lg-6 topicon">
                    <img src={'http://openweathermap.org/img/w/' + icon + '.png'}></img>
                </div>
                <div className="col-lg-6 topdegrees">
                    {location}
                    <div className='degrees'>{degrees}&deg;</div>
                    {wind && <div>Wind<span className='wind'>{speed}</span> {unitsType === 'metric' ? <span>km/h</span> : <span>mph</span>}</div>}
                </div>
            </div>
        </div>
    )
}
