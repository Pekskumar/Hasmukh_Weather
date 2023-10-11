import React, { useEffect, useState } from "react";
import "./style.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Ahmedabad");

  useEffect(() => {
    fetchData();
  }, [search]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  const fetchData = async () => {
    const apiKey = "3bc2c27dc37c6cae3b37daddbb75dc44";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const responseData = await response.json();

    setCity(responseData.main);
  };

  return (

    <>
      <h1 className="heading-title">Weather App</h1>
      <div className="box">

        <div className="overlay"></div>

        <div className="box_content">

          <div className="inputData">
            <input
              type="search"
              className="inputField"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          {!city ? (
            <div className="errorMsg">
              <p>No Data Found</p>
            </div>
          ) : (
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="temp_min_max">
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
