import styles from "./StickyUpperBar.module.css";
import PropTypes from "prop-types";

function StickyUpperBar({ toggle }) {
    return (
        <div className={styles.bar}>
            <button onClick={toggle}>toggle</button>
        </div>
    );
}

export default StickyUpperBar;

StickyUpperBar.propTypes = {
    toggle: PropTypes.func.isRequired,
};
