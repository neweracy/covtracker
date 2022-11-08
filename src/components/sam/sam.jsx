import { useEffect, useState } from "react";
import React, { Component } from "react";
import "./sam.css";
import Picture from "../favicon_io/immmg.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Slide from "../charts/charts";
import CountUp from "react-countup";
//import CountUp from "react-countup";

const Sam = () => {
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [date, setDate] = useState("");
  const [ghcases, setGhcases] = useState("");
  const [ghrecovered, setGhrecovered] = useState("");
  const [ghdeaths, setGhdeaths] = useState("");

  useEffect(() => {
    fetch("https://mazitekgh.com/covid19/v1/")
      .then((responseData) => responseData.json())
      .then((data) => {
        setCases(data.global.confirmed);
        setRecovered(data.global.recovered);
        setDeaths(data.global.deaths);
        setDate(data.global.date);
        setGhcases(data.ghana.confirmed);
        setGhrecovered(data.ghana.recovered);
        setGhdeaths(data.ghana.deaths);
      });
  });

  return (
    <div className="main">
      <div className="sub-main">
        <div className="dat">
          <img src={Picture} className="hel" width="400px" alt="logo" />
        </div>

        <div className="container">
          <h2 className="snd-head">global</h2>
          <div className="sub-container">
            <div className="card car1">
              <h2 className="club">Cases</h2>
              <h3>
                GLOBAL : <CountUp start={0} end={cases} separator={","} />
              </h3>
              <h3>
                Ghana : <CountUp start={0} end={ghcases} separator={","} />
              </h3>

              <h8>on today's date :</h8>
              <h7>{date}</h7>
              <div className="lowerborder lb1"></div>
            </div>
            <div className="card car2">
              <h2 className="club">Recovered</h2>
              <h3>
                GLOBAL : <CountUp start={0} end={recovered} separator={","} />
              </h3>
              <h3>
                Ghana : <CountUp start={0} end={ghrecovered} separator={","} />
              </h3>
              <h8>on today's date :</h8>
              <h7>{date}</h7>
              <div className="lowerborder lb2"></div>
            </div>
            <div className="card car3">
              <h2 className="club">Deaths</h2>
              <h3>
               GLOBAL : <CountUp start={0} end={deaths} separator={","} />
              </h3>
              <h3>
              Ghana : <CountUp start={0} end={ghdeaths} separator={","} />
              </h3>
              <h8>on today's date :</h8>
              <h7>{date}</h7>
              <div className="lowerborder lb3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sam;
