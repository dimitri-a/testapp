import React from 'react'

export default ({ title, icon, degrees }) => {
    debugger
    return (
        <div>
            {title}
            <img src={icon}></img>
            {degrees}
        </div>
    )
}
