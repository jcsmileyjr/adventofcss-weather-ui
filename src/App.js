import testLogo from './logo.svg';
import './App.css';

/**
 * TODO LIST
 * Set up general structure of one section
 * Add images and text
 * Format styling for desktop (matches the design)
 * Add in other sections
 */

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <p>WED</p>
          <p>8</p>
          <div>
            <img src={testLogo} className="weatherLogo--style" alt="test" />
            <p>71&#176;</p>
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
      </main>
    </div>
  );
}

export default App;
