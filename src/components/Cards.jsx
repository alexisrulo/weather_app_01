import React from 'react';
import Card from './Card';
import styles from "./style/Cards.module.css";


export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={styles.cities}>
      {cities.map((city) => (
        <Card
          key={city.id}
          temp={city.temp}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}
        />
      ))}
    </div>
  )
};