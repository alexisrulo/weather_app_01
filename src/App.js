import React from "react";
import "./App.css";
import "normalize.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";
import styles from "./components/style/Card.module.css";

function App() {
  const [ciudadess, setCities] = React.useState([]);
  const apiKey = process.env.REACT_APP_APIKEY;
  const IDontknow = 'Hola'

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min*10)/10,
            max: Math.round(recurso.main.temp_max*10)/10,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          if (ciudadess.find((c) => c.id ==ciudad.id)) return;
          setCities(oldCities => [...oldCities, ciudad]);
          }
      
          else {
            alert("Ciudad no encontrada");
          }

        }
      );

    } 
  
  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !=id))
  };

  return (
    <div className="App">
      <div className="search">
        <SearchBar onSearch={(city) => onSearch(city)} />
      </div>
      <div className="contenido">
        <div>
         {ciudadess.length && (<Card
            max={ciudadess[ciudadess.length-1].max}
            min={ciudadess[ciudadess.length-1].min}
            name={ciudadess[ciudadess.length-1].name}
            img={ciudadess[ciudadess.length-1].img}
            temp={ciudadess[ciudadess.length-1].temp}
            main={true}
          />)}
        </div>
        <div className="tarjetas">
          <Cards cities={ciudadess} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default App;
