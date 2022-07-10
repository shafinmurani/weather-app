import React, { useState } from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
const api = {
  key: "REDACTED",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [searchVal, setsearchVal] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    fetch(`${api.base}weather?q=${searchVal}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setsearchVal("");
        console.log(result);
      });
  };

  const dateConstructor = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 23
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setsearchVal(e.target.value)}
            value={searchVal}
          />
          <Button
            variant="contained"
            size="large"
            style={{ marginInline: "auto", display: "flex", marginTop: "1rem" }}
            color="info"
            onClick={search}
          >
            Search
          </Button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateConstructor(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="location-box">
                <div
                  className="location"
                  style={{ fontSize: "1.3rem", marginBottom: "1rem" }}
                >
                  Feels Like : {Math.round(weather.main.feels_like)}°C
                </div>
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
