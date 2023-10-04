import styles from "./SideBarMenu.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { BsFlower2 } from "react-icons/bs";

function SideBarMenu({ menuIsOpen, toggle }) {
    const items = [
        { title: "Мой профиль", link: "/profile", icon: <BsFlower2 /> },
        { title: "Главная", link: "/", icon: <BsFlower2 /> },
        {
            title: "Фразы на слух",
            link: "/listen-phrases",
            icon: <BsFlower2 />,
        },
    ];

    const activeMenu = menuIsOpen ? styles.activeMenu : "";

    return (
        <>
            <div className={`${styles.sideBar} ${activeMenu}`}>
                {items.map((item, i) => (
                    <NavLink
                        to={item.link}
                        key={i}
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.link} ${styles.active}`
                                : `${styles.link}`
                        }
                        onClick={toggle}
                    >
                        <div className={styles.icon}>{item.icon}</div>
                        <div className={styles.title}>{item.title}</div>
                    </NavLink>
                ))}
            </div>
        </>
    );
}

export default SideBarMenu;

SideBarMenu.propTypes = {
    menuIsOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};
