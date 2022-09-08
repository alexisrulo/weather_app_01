import React from 'react';
import styles from './style/SearchBar.module.css'
import {BiAddToQueue, BiSearch} from 'react-icons/bi'
export default function SearchBar({onSearch}) {
  // acá va tu código
  const input = document.getElementById('buscador')
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const input = document.getElementById('cityInput')
        onSearch(input.value);
        input.value = ""
      }}>
        <BiSearch className={styles.icon1} />
        <input placeholder='Buscar...' type='text' id='cityInput' className={styles.input}></input>
        <button className={styles.button}><BiAddToQueue className={styles.icon2} /> Agregar Ciudad</button>
      </form>
    </div>
  );
};