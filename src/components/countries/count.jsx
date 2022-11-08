import React, { useEffect, useState } from "react";
import axios from "axios";
//import Columns from "react-columns";
import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import Form from "react-bootstrap/Form";

const Country = () => {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
 // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
        //setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 // const date = new Date(parseInt(latest.updated));
 // const lastUpdated = date.toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });
  const countries = filterCountries.map((data, i) => {
    return (
      <Card key={i} className="text-center" style={{ margin: "10px" }}>
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's cases {data.todayCases}</Card.Text>
          <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
 // var queries = [
   //{
     // columns: 2,
   //   query: "min-width: 500px",
   // },
   // {
   //   columns: 3,
   //   query: "min-width: 1000px",
   // },
 // ];


  return <div className="me">
       <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            bg="dark"
            type="text"
            placeholder="Search for countries"
            onChange={(e) => setSearchCountries(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div>{countries}</div>
  </div>;
};

export default Country;
