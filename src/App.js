import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
      </div>
      <footer>
        This project was coded by Renee Singh and is {""}
        <a href="https://github.com/renxss/react-weather-app2" target="_blank">
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
