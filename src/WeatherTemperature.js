import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div
        className="WeatherTemperature"
        style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}
      >
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={convertToFahrenheit}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div
        className="WeatherTemperature"
        style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}
      >
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showCelsius}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
