/* eslint-disable no-unused-vars */
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import clou_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" name="search" id="search" placeholder="Search" />
        <img src={search_icon} alt="search-icon" />
      </div>
      <img src={clear_icon} alt="" className="weather-icon" />
      <p className="temperature">16℃</p>
      <p className="location">Mumbai</p>
    </div>
  );
};

export default Weather;