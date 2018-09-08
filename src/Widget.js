import React from 'react'

export default ({ title, icon, degrees }) => {
    return (
        <div>
            {title}
            <img src={icon}></img>
            {degrees}
        </div>
    )
}
