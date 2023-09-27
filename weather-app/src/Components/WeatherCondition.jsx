import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./WeatherCondition.css";
import { FiSearch } from "react-icons/fi";
import Correct from './Correct/Correct';
import Error from "./Error/Error"
import Empty from '../Empty';

const WeatherCondition = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("");
    const [cityName, setCityName] = useState("")

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        setCityName(city)
        fetchData(cityName);

        setCity("")
    }

    useEffect(() => {
        if (cityName) {
            fetchData(cityName);
        }
    }, [cityName]);

    const fetchData = async (cityName) => {
        const apiKey = '915abf34fa203c68abc88747c2810302';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        try {
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
        } catch (error) {
            document.getElementsByClassName("output").innerHTML = <Error />
        }
    };

    return (
        <>
            <div className="main-page">
                <div className="card">
                    <form onSubmit={formSubmit}>
                        <div className="search">
                            <input type="text" className='input-field' placeholder="City Name" onChange={handleChange} value={city} />
                            <div>
                                <button type="submit" className='search-icon'><FiSearch /></button>
                            </div>
                        </div>

                        <div className="output">
                            {weatherData ? (
                                <Correct
                                    city={weatherData.name}
                                    temperature={(weatherData.main.temp - 273.15).toFixed(2)}
                                    humidity={weatherData.main.humidity.toFixed(2)}
                                    wind={weatherData.wind.speed.toFixed(2)}
                                />
                            ) : (cityName == "" ? <Empty /> : <Error />)}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default WeatherCondition;
