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
      if (lat !== null && long !== null) {
        console.log("fetching data");
        axios.get(weatherUrl).then((response) => {
          setWeather(response.data);
          setIcon(response.data.weather[0].icon);
          console.log(response.data);
        });
      }
    }, [lat, long, weatherUrl]);
  

    if(!weather) {
        return <p>Cannot find weather data</p>
    }


    return (

        <div className="col-xl-3 col-sm6 mb-5" style={{textAlign:"center"}}>
          <div className="bg-white rounded shadow-sm py-5 px-4"  style={{ height: "100%", fontSize: "14px" }}>
            <h5 className="otsikko">Sää nyt</h5>
            <img src={iconUrl} alt="Weather icon"></img>
            <p className="mb-1">Lämpötila {weather.main.temp} astetta</p>
            <p className="mb-1">Tuulen nopeus {weather.wind.speed} m/s</p>
            <p className="mb-1">Suhteellinen ilmankosteus {weather.main.humidity} %</p>
            <br/>
            <Advice temperature={weather.main.temp} humidity={weather.main.humidity}/>
          </div>
        </div>
    )
}

export default Weather