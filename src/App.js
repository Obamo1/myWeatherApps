import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const API_KEY = "f08ef68202e2b50938830fdb948021db";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 4px 8px 0 #555;
  padding: 20px 10px;
  border-radius: 17px;
  width: 300px;
  background: #e7ded9;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

const AppLabel = styled.span`
  color: #13292a;
  font-size: 24px;
  font-weight: bold;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>WEATHER FORECAST</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
