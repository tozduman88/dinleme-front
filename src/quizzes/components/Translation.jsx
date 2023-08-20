import PropTypes from "prop-types";
import styles from "./Translation.module.css";

const Translation = ({ text, isShown, onClick }) => {
    return (
        <>
            {isShown ? (
                <p className={styles.text}>{text}</p>
            ) : (
                <p className={styles.link} onClick={onClick}>
                    Посмотреть перевод
                </p>
            )}
        </>
    );
};
export default Translation;

Translation.propTypes = {
    text: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};
