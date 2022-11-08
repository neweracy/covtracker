import ReactMapGL from "react-map-gl";
import "./map.css";
import React, { useState, useEffect,filter } from "react";

const Map = () => {
  let [viewport, setViewport] = useState({
    latitude: 7.946527,
    longitude: -1.023194,
    zoom: 8,
    height: 500,
    width: window.innerWidth,
  });

  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/recovered/")
      .then((responseData) => responseData.json())
      .then((data) => {
        setCases(data.confirmed);
        setRecovered(data.recovered);
        
        setDeaths(data.deaths);
        setPlace(data.combinedKey);
        
        



        
        
      });
  });
  



  
 
 

  



  return (
    <div className="mad">
      <div className="ass-main">
        
        <div className="prick-sub">
          <ReactMapGL
            className="remap"
            mapStyle={"mapbox://styles/mapbox/dark-v10"}
            mapboxApiAccessToken={
              "pk.eyJ1IjoibmV3ZXJhY3kiLCJhIjoiY2tyZW1zdzdoMXQxMjJwcXV6c2ZnZzhicyJ9.5oLc3wIg-VePKRyY3oTzBA"
            }
            {...viewport}
            // {...settings}
            onViewportChange={(newView) => setViewport(newView)}
          ></ReactMapGL>
        </div>
      </div>
    </div>
  );
};

export default Map;
