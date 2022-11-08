import "./App.css";
import Sam from "./components/sam/sam";
//import Navbar from "./components/nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Slide from "./components/charts/charts";
import Country from "./components/countries/count";
//import Country from "./components/countries/country";
import Map from "./components/map/map";
import CountUp from "react-countup";
import "mapbox-gl/dist/mapbox-gl.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Sam />
      <Router>
        <div className="buttocks">
          <div className="butt">
            <Link to="/slide">
              <Button className="pussy">CHARTS</Button>
            </Link>
            <Link to='/map'>
              <Button className="pussy">MAPS</Button>
            </Link>
           
          </div>
          
        </div>
        <div className='but'>
          <Link to='/count'>
              <Button className="pussy">COUNTRIES</Button>
            </Link>
          </div>

        <Switch>
          <Route path="/map" component={Map} />
          <Route path="/count" component={Country} />

          <Route path="/slide" component={Slide} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
