import { MenuButton } from "../../components/MenuButton";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;

const Home = () => {
    return (
        <>
            Hi {tg.initDataUnsafe.user.id}!
            <div className="container">
                <h3>Уровень:</h3>
                <Link to="easy">
                    <MenuButton text="Легко" />
                </Link>
                <Link to="middle">
                    <MenuButton text="Средне" />
                </Link>
                <Link to="hard">
                    <MenuButton text="Сложно" />
                </Link>
            </div>
        </>
    );
};

export default Home;
