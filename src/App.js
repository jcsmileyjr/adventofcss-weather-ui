import testLogo from './logo.svg';
import weatherData from './data/data'
import CloudyIcon from "./assets/white-cloud.png"
import SunnyIcon from './assets/yellow-sun.png'
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
              <div className={`content--container ${weather.weatherType === "cloudy"?'cloud-bg-colors':""} ${weather.weatherType === "sunny"?'sunny-bg-colors':""}`}>
                {weather.weatherType === "cloudy" &&
                  <div className='image-container'>
                    <img src={CloudyIcon} className="weatherLogo--style clouds" alt="test" />
                  </div>
                }
                {weather.weatherType === "sunny" &&
                  <div className='image-container'>
                    <img src={SunnyIcon} className="weatherLogo--style clouds" alt="test" />
                  </div>
                }
                <img src={testLogo} className="weatherLogo--style" alt="test" />
                <p className='temp--style'>{weather.temp}&#176;</p>
                <>
                  <div className="details--container">
                    <img src={testLogo} className="minorLogo--style" alt="test" />
                    <p>84%</p>
                  </div>
                  <div className="details--container">
                    <img src={testLogo} className="minorLogo--style" alt="test" />
                    <p>28&#176;</p>
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
