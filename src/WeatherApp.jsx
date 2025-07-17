import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Kolkata",
        feelsLike : 30.89,
        temp : 29.1,
        tempMin : 29.1,
        tempMax : 29.1,
        humidity : 58,
        weather : "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign : "center"}}>
            <h2><b><i>Weather App</i></b></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}