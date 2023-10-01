import { MenuButton } from "../../components/MenuButton";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;

const params = new URLSearchParams(window.location.hash.slice(1));
const initDataString = params.get("tgWebAppData");
const initData = new URLSearchParams(initDataString);
const user = initData.get("id");

const Home = () => {
    const length = Object.keys(tg.initDataUnsafe).length;
    return (
        <>
            <p>{initData}</p>
            {length > 0 ? (
                <Link to={`profile/${tg.initDataUnsafe.user.id}`}>
                    Мой профиль
                </Link>
            ) : (
                <p>Hi user</p>
            )}

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
