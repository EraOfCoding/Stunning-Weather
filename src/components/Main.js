import React from 'react'
import '../style/Main.css'

function Main(props) {
    return (
        <div className="main">
            <h2>{props.weather}</h2>
            <h1>{props.temprature}°C</h1>
            <h3>{props.region}</h3>
            <h4>{props.date}</h4>
        </div>
    )
}

export default Main