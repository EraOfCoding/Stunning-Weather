import React from 'react'
import '../style/Main.css'

function Main(props) {
    const emojis = props.weather === "Clear" ? "☀️" :
        props.weather === "Clouds" ? "☁️" :
            props.weather === "Foggy" ||
                props.weather === "Mist" ||
                props.weather === "Haze" ||
                props.weather === "Smoke" ||
                props.weather === "Dust" ? "🌫️" :
                props.weather === "Snow" ? "❄️" :
                    props.weather === "Rain" || props.weather == "Drizzle" ? "🌧️" : ""

    return (
        <div className="main">
            <h2 id="weather-name">{props.weather} <h3 id="emoji">{emojis}</h3></h2>
            <h1>{props.temprature}°C</h1>
            <h3>{props.region}</h3>
            <h4>{props.date}</h4>
        </div>
    )
}

export default Main