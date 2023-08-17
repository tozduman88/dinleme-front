import PropTypes from "prop-types";
import styles from "./PopUp.module.css";

export default function PopUp({ isOpen, text }) {
    return (
        <>
            {isOpen && (
                <div className={styles.popup}>
                    <div className={styles.inner}>
                        <p>{text}</p>
                    </div>
                </div>
            )}
        </>
    );
}

PopUp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};
