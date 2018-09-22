import React from 'react'

export default ({ title, icon, degrees, farenheit }) => {
    return (
        <div className="border">
            {title}
            <img src={'http://openweathermap.org/img/w/'+icon+'.png'}></img>
            {degrees}
        </div>
    )
}
