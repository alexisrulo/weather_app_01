import React from "react";
import CardForm from "./CardForm";
import styles from "./style/Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={props.main ? styles.mainCard : styles.card}>
      <div className={styles.contentCard}>
      <div className={styles.button}>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>{props.name}</h2>
          <div className={styles.maxmin}>
            <CardForm label="MIN" value={props.min} />
            <CardForm label="MAX" value={props.max} />
          <h3>{props.temp} º</h3>
          </div>
        </div>
        <div>
          <img
            className={styles.img}
            src={`http://openweathermap.org/img/wn/${props.img}@${props.main ? '4x' : '2x'}.png`}
            alt="weather-icon"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
