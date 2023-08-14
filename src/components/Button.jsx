import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ text, onClick }) {
    return (
        <button onClick={onClick} className={styles.btn}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
