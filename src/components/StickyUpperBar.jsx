import styles from "./StickyUpperBar.module.css";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";

function StickyUpperBar({ toggle }) {
    return (
        <div className={styles.bar}>
            <button onClick={toggle}>
                <GiHamburgerMenu className={styles.icon} />
            </button>
        </div>
    );
}

export default StickyUpperBar;

StickyUpperBar.propTypes = {
    toggle: PropTypes.func.isRequired,
};
