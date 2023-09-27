import React, { useEffect, useState } from 'react'
import "./Correct.css"
import { AiFillCloud } from "react-icons/ai"

const Correct = (props) => {
    return (
        <>
            <div className="correct-main">
                <h1 className='city-name'>{props.city}</h1>
                <div className="condition">
                    <p><AiFillCloud /></p>
                </div>

                <div className="weather-details">
                    <div className="details">
                        <div className="temperature"><span style={{ fontSize: "15px" }}>Temperature: </span><br /><span className='temp-data'>{props.temperature} °C</span></div>
                        <div className="humidity"><span style={{ fontSize: "15px" }}>Humidity: </span><br /><span className='humidity-data'>{props.humidity} %</span></div>
                        <div className="wind-speed"><span style={{ fontSize: "15px" }}>Wind Speed: </span><br /><span className='wind-data'>{props.wind} km/hr</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Correct