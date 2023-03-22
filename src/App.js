import testLogo from './logo.svg';
import weatherData from './data/data'
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
  console.log(weatherData)
  return (
    <div className="App">
      <main>
        {
          weatherData.map( (weather, index) => (
            <section>
              <p>{weather.day}</p>
              <p>{weather.date}</p>
              <div>
                <img src={testLogo} className="weatherLogo--style" alt="test" />
                <p>{weather.temp}&#176;</p>
                <>
                  <div>
                    <img src={testLogo} className="minorLogo--style" alt="test" />
                    <p>84%</p>
                  </div>
                  <div>
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
