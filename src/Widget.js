import React from 'react'

export default ({ title, icon, degrees, farenheit }) => {

    console.log(degrees);
    return (
        <div className="border">
            {title}
            <br/>
            <img src={'http://openweathermap.org/img/w/'+icon+'.png'}></img>
            {degrees}
        </div>
    )
}
