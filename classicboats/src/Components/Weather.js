import axios from "axios";
import { useEffect, useState } from "react";
import Advice from "./Advice";


const Weather = ({lat, long}) => {

    const latitude = lat
    const longitude = long
    const apiKey = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState(null)
    const [icon, setIcon] = useState(null)
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

    useEffect(() => {
        console.log("fetching data")
        axios
          .get(weatherUrl)
          .then((response) => {
            setWeather(response.data)
            setIcon(response.data.weather[0].icon)
            console.log(response.data)
          })
    }, [weatherUrl])

    if(!weather) {
        return <p>Cannot find weather data</p>
    }


    return (
        <div>
        <h3>Sää nyt</h3>
        <br/>
        <p>lämpötila {weather.main.temp} astetta</p>
        <img src={iconUrl} alt="Weather icon"></img>
        <p>Tuulen nopeus {weather.wind.speed} m/s</p>
        <p>Suhteellinen ilmankosteus {weather.main.humidity} %</p>
        <Advice temperature={weather.main.temp} humidity={weather.main.humidity}/>
        </div>
        
    )
}

export default Weather