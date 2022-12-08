import styles from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={styles.btn} onClick={props.onClick}>
        +
      </button>
      <button className={styles.bluebtn} onClick={props.minusClick}>
        -
      </button>
    </div>
  );
}
export default Button;
