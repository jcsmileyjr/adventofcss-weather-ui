import testLogo from "./logo.svg";
import weatherData from "./data/data";
import CloudyIcon from "./assets/white-cloud.png";
import SunnyIcon from "./assets/yellow-sun.png";
import RainIcon from "./assets/cloud-rain-icon-1.png";
import SnowIcon from "./assets/snowflake-color-icon.png";
import CloudyUmbrella from "./assets/cloudy-umbrella.png";
import SunnyUmbrella from "./assets/sunny-umbrella.png";
import RainUmbrella from './assets/rain-umbrella.png'
import CloudyThermometer from "./assets/cloudy-thermometer.png";
import SunnyThermometer from "./assets/sunny-thermometer.png";
import RainThermometer from './assets/rain-thermometer.png'
import "./App.css";

/**
 * TODO LIST
 * Set up general structure of one section
 * Add images and text
 * Create a data object to generate the UI sections' content
 * Format styling for desktop (matches the design)
 * Add functionality to display icons based on data types
 */

const WeatherReport = ({
  weather,
  weathericon,
  umbrella,
  thermometer,
  weatherDetailStyle,
  tempStyle
}) => {
  return (
    <>
      <div className="image-container">
        <img
          src={weathericon}
          className="weatherLogo--style clouds"
          alt="test"
        />
      </div>
      <p className={`temp--style ${tempStyle}`}>
        {weather.temp}&#176;
      </p>
      <>
        <div className="details--container">
          <>
            <img src={umbrella} className="minorLogo--style" alt="test" />
            <p className={`thermometer ${weatherDetailStyle}`}>84%</p>
          </>
        </div>
        <div className="details--container">
          <>
            <img src={thermometer} className="minorLogo--style" alt="test" />
            <p className={`thermometer ${weatherDetailStyle}`}>28&#176;</p>
          </>
        </div>
      </>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <main>
        {weatherData.map((weather, index) => (
          <section>
            <p className="day--style">{weather.day}</p>
            <p className="date--style">{weather.date}</p>
            <div
              className={`content--container ${
                weather.weatherType === "cloudy" ? "cloud-bg-colors" : ""
              } ${weather.weatherType === "sunny" ? "sunny-bg-colors" : ""} ${
                weather.weatherType === "rainy" ? "rainy-bg-colors" : ""
              } ${weather.weatherType === "snowy" ? "snow-bg-colors" : ""}`}
            >
              {weather.weatherType === "cloudy" && (
                <WeatherReport
                  weather={weather}
                  weathericon={CloudyIcon}
                  umbrella={CloudyUmbrella}
                  thermometer={CloudyThermometer}
                  weatherDetailStyle="white"
                  tempStyle="yellow"
                />
              )}
              {weather.weatherType === "sunny" && (
                <WeatherReport
                  weather={weather}
                  weathericon={SunnyIcon}
                  umbrella={SunnyUmbrella}
                  thermometer={SunnyThermometer}
                  weatherDetailStyle="green"
                  tempStyle="darkBlue"
                />
              )}
              {weather.weatherType === "rainy" && (
                <WeatherReport
                  weather={weather}
                  weathericon={RainIcon}
                  umbrella={RainUmbrella}
                  thermometer={RainThermometer}
                  weatherDetailStyle="white"
                  tempStyle="yellow"
                />
              )}
              {weather.weatherType === "snowy" && (
                <WeatherReport
                  weather={weather}
                  weathericon={SnowIcon}
                  umbrella={CloudyUmbrella}
                  thermometer={CloudyThermometer}
                  weatherDetailStyle="green"
                  tempStyle="black"
                />
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
