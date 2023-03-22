import testLogo from './logo.svg';
import weatherData from './data/data'
import CloudyIcon from "./assets/white-cloud.png"
import SunnyIcon from './assets/yellow-sun.png'
import RainIcon from './assets/cloud-rain-icon-1.png'
import SnowIcon from './assets/snowflake-color-icon.png'
import CloudyUmbrella from './assets/cloudy-umbrella.png'
import SunnyUmbrella from './assets/sunny-umbrella.png'
import CloudyThermometer from './assets/cloudy-thermometer.png'
import SunnyThermometer from './assets/sunny-thermometer.png'
import './App.css';


/**
 * TODO LIST
 * Set up general structure of one section
 * Add images and text
 * Create a data object to generate the UI sections' content
 * Format styling for desktop (matches the design)
 * Add functionality to display icons based on data types
 */

function App() {
  return (
    <div className="App">
      <main>
        {
          weatherData.map( (weather, index) => (
            <section>
              <p className='day--style'>{weather.day}</p>
              <p className='date--style'>{weather.date}</p>
              <div className={`content--container ${weather.weatherType === "cloudy"?'cloud-bg-colors':""} ${weather.weatherType === "sunny"?'sunny-bg-colors':""} ${weather.weatherType === "rainy"?'rainy-bg-colors':""} ${weather.weatherType === "snowy"?'snow-bg-colors':""}`}>
                {weather.weatherType === "cloudy" &&
                  <>
                    <div className='image-container'>
                      <img src={CloudyIcon} className="weatherLogo--style clouds" alt="test" />
                    </div>
                    <p className='temp--style cloudy-details-color'>{weather.temp}&#176;</p>
                  </>
                }
                {weather.weatherType === "sunny" &&
                  <div className='image-container'>
                    <img src={SunnyIcon} className="weatherLogo--style clouds" alt="test" />
                  </div>
                }

                {weather.weatherType === "rainy" &&
                  <div className='image-container'>
                    <img src={RainIcon} className="weatherLogo--style clouds" alt="test" />
                  </div>
                }
                {weather.weatherType === "snowy" &&
                  <div className='image-container'>
                    <img src={SnowIcon} className="weatherLogo--style clouds" alt="test" />
                  </div>
                }
                
                <>
                  <div className="details--container">
                    {weather.weatherType === "cloudy" &&
                      <>
                        <img src={CloudyUmbrella} className="minorLogo--style" alt="test" />
                        <p className='thermometer cloudy-details-color'>84%</p>            
                      </>
                    }
                    {weather.weatherType === "sunny" &&
                      <img src={SunnyUmbrella} className="minorLogo--style thermometer" alt="test" />
                    }
                    
                  </div>
                  <div className="details--container">
                    {weather.weatherType === "cloudy" &&
                      <>
                        <img src={CloudyThermometer} className="minorLogo--style" alt="test" />
                        <p className='thermometer cloudy-details-color'>28&#176;</p>                      
                      </>
                    }
                    {weather.weatherType === "sunny" &&
                      <img src={SunnyThermometer} className="minorLogo--style " alt="test" />
                    }
                  </div>
                </>
              </div>
            </section>
          ))
        }
      </main>
    </div>
  );
}

export default App;
