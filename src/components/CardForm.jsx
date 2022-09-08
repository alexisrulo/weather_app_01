import styles from "./style/Card.module.css";

function CardForm({ label, value }) {
  return (
    <div className={styles.cardtemp}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}> {value} º</div>
    </div>
  );
}

export default CardForm;
