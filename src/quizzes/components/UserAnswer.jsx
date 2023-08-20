import PropTypes from "prop-types";
import styles from "./UserAnswer.module.css";

export default function UserAnswer({ text }) {
    return <p className={styles.text}>{text}</p>;
}

UserAnswer.propTypes = {
    text: PropTypes.string.isRequired,
};
