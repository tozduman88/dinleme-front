import styles from "./MenuButton.module.css";
import PropTypes from "prop-types";

export default function MenuButton({ text }) {
    return <div className={styles.btn}> {text} </div>;
}

MenuButton.propTypes = {
    text: PropTypes.string.isRequired,
};
