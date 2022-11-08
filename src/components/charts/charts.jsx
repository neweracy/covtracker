import React, { Component } from "react";

import { useEffect, useState } from "react";
import "./charts.css";
//import #"bootstrap/dist/css/bootstrap.min.css";

import { Bar, Bubble, Chart, Line, Pie } from "react-chartjs-2";
//import  {  } from '../sam/sam';

const Slide = () => {
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
    <div className="charts">
      <div className="bar">
        <Bar
          data={{
            labels: ["CASES", "RECOVERED", "DEATHS"],

            datasets: [
              {
                label: "covid",
                data: [cases, recovered, deaths],
                backgroundColor: [
                  "rgb(165, 33, 33,0.9)",
                  "rgb(8, 168, 8,0.9)",
                  "rgb(92, 88, 88,0.9)",
                ],
                borderWidth: 4,
                borderColor: "#3f51b5",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            title: { text: "STATISTICS ON COVID-19", display: true },
          }}
        />
      </div>
    </div>
  );
};

export default Slide;
