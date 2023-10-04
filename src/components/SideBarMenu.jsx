import styles from "./SideBarMenu.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function SideBarMenu({ menuIsOpen, toggle }) {
    const items = [
        { title: "Мой профиль", link: "/profile" },
        { title: "Главная", link: "/" },
        { title: "Фразы на слух", link: "/listen-phrases" },
    ];

    const activeMenu = menuIsOpen ? styles.activeMenu : "";

    return (
        <>
            <div className={`${styles.sideBar} ${activeMenu}`}>
                <h2>MENU</h2>
                <ul>
                    {items.map((item, i) => (
                        <li key={i} className={styles.link}>
                            <NavLink
                                to={`${item.link}`}
                                className={({ isActive }) =>
                                    isActive ? `${styles.active}` : ""
                                }
                                onClick={toggle}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SideBarMenu;

SideBarMenu.propTypes = {
    menuIsOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};
