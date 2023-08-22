import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
import styles from "./CorrectAnswer.module.css";

export default function CorrectAnswer({ text }) {
    return (
        <div className={styles.box}>
            <IoIosCheckmarkCircle className={styles.icon} />
            <p className="bold">{text}</p>
        </div>
    );
}

CorrectAnswer.propTypes = {
    text: PropTypes.string.isRequired,
};
