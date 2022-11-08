import React, { useEffect, useState } from "react";
import "./gh.css";


const Country = () => {
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [active, setActive] = useState("");
  const [country, setCountry] = useState("");
  
  


  useEffect(() => {
    fetch("https://corona.lmao.ninja/countries/ ")
      .then((responseData) => responseData.json())
      .then((data) => {
        console.log(data)
       // setCases(data.confirmed);
       // setRecovered(data.recovered);
       // setDeaths(data.deaths);
       // setActive(data.active);
       // setCountry(data.countryRegion);
      });
  });
  return (
    <div className="maintries">
      <div className="subtries">
        <div className="triesbox">
          <div className="startcount">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
