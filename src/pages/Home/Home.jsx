import { MenuButton } from "../../components/MenuButton";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;

const Home = () => {
    console.log("length", tg.initDataUnsafe.length);
    return (
        <>
            {tg.initDataUnsafe.length != undefined ? (
                <Link to={tg.initDataUnsafe.user.id}>Мой профиль</Link>
            ) : (
                <p>Hi user!</p>
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
