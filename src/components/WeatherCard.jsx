import React from 'react'
import weatherCloudly from '../assets/weather-cloudy.png'

const WeatherCard = ({weatherDeatils}) => {
  console.log(weatherDeatils)
  return (
    <div className="weather-Section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDeatils.current.temp_c}<sup>o</sup>
        </div>
<div className="weather-info">
  <sapn>
   🌈 {weatherDeatils.current.humidity}
  </sapn>
  <span>
    ☁️{weatherDeatils.current.cloud}
  </span>
</div>
<div className="weather-place">
  {weatherDeatils.location.name},{weatherDeatils.location.region}, {weatherDeatils.location.country}
</div>
<div className="weather-avatar">
  <img src={weatherCloudly} alt="" />
  
</div>
      </div>
    </div>
  )
}

export default WeatherCard
