import weatherData from "./data/data";
import CloudyIcon from "./assets/white-cloud.png";
import SunnyIcon from "./assets/yellow-sun.png";
import RainIcon from "./assets/cloud-rain-icon-1.png";
import SnowIcon from "./assets/snowflake-color-icon.png";
import CloudyUmbrella from "./assets/cloudy-umbrella.png";
import SunnyUmbrella from "./assets/sunny-umbrella.png";
import RainUmbrella from './assets/rain-umbrella.png'
import SnowUmbrella from './assets/snow-umbrella.png'
import CloudyThermometer from "./assets/cloudy-thermometer.png";
import SunnyThermometer from "./assets/sunny-thermometer.png";
import RainThermometer from './assets/rain-thermometer.png'
import SnowThermometer from './assets/snow-thermometer.png'
import "./App.css";

/**
 * Component to display a day's weather
 * @param {object} - weather:       Weather object from an array from the data/data.json 
 * @param {string} - weather.day:   Property featuring the day of the week in three charaters
 * @param {number} - weather.date:  Property featuring the date of the week
 * @param {string} - weather.weatherType: Property featuring the type of weather expected (sunny, rainy, cloudy, snowy)
 * @param {number} - weather.temp:  Property featuring the expected temperture 
 * @param {image} -  weathericon:   Image reference to the weather expected (clouds, sun, rain, snow)
 * @param {image} -  umbrella:      Image reference that have the correct color to the background based on weather expected
 * @param {image} -  thrmometer:    Image reference that have teh correct color to the background based on weather expected
 * @param {string} -  weatherDetailStyle: Style class that corrolates to which color should the details section should have
 * @param {string} -  tempStyle:    Style class that corrolates toTells which color the temperture should have
 * @returns 
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
      {/*Displays type of weather via images */}
      <div className="image-container">
        <img
          src={weathericon}
          className="weatherLogo--style clouds"
          alt="test"
        />
      </div>

      {/*Displays the current temperture */}
      <p className={`temp--style ${tempStyle}`}>
        {weather.temp}&#176;
      </p>

      {/*Displays the humility and baramoter details */}
      <div>
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
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <main>
        {/*Sort through each object within the data/data.json array to display 7 days of weather*/}
        {weatherData.map((weather, index) => (
          <section key={index}>
            {/*Header */}
            <p className="day--style">{weather.day}</p>
            <p className="date--style">{weather.date}</p>

            {/*Based on weather type, a different background color scheme is used */}
            <div
              className={`content--container ${
                weather.weatherType === "cloudy" ? "cloud-bg-colors" : ""
              } ${weather.weatherType === "sunny" ? "sunny-bg-colors" : ""} ${
                weather.weatherType === "rainy" ? "rainy-bg-colors" : ""
              } ${weather.weatherType === "snowy" ? "snow-bg-colors" : ""}`}
            >
              
              {/*Content with images & color based on weather type */}
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
                  umbrella={SnowUmbrella}
                  thermometer={SnowThermometer}
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
