import styles from "./Button.module.css";

export function Button({ text }) {
    return <button className={styles.btn}> {text} </button>;
}
