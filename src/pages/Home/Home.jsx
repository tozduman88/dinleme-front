import { MenuButton } from "../../components/MenuButton";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;
const hash = window.location.hash.slice(1);
console.log("hash", hash);
const params = new URLSearchParams(hash);
const initData = new URLSearchParams(params.get("tgWebAppData"));

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
