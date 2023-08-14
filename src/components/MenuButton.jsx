import styles from "./MenuButton.module.css";
import PropTypes from "prop-types";

export function MenuButton({ text }) {
    return <button className={styles.btn}> {text} </button>;
}

MenuButton.propTypes = {
    text: PropTypes.string.isRequired,
};
