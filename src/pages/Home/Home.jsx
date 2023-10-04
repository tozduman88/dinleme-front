import MenuButton from "~/components/MenuButton";
import { Link } from "react-router-dom";
// import WebApp from "@twa-dev/sdk";

// const params = new URLSearchParams(window.location.hash.slice(1));
// const initDataString = params.get("tgWebAppData");
// const initData = new URLSearchParams(initDataString);
// const user = JSON.parse(initData.get("user"));

const Home = () => {
    // const length = Object.keys(WebApp.initDataUnsafe).length;
    return (
        <>
            {/* {length > 0 ? (
                <Link to={`profile/${user.id}`}>Мой профиль</Link>
            ) : (
                    <p>Hi user</p>
                )} */}

            <div className="container">
                <Link to="listen-phrases">
                    <MenuButton text="Фразы на слух" />
                </Link>
                <Link to="#">
                    <MenuButton text="Разборы видео" />
                </Link>
            </div>
        </>
    );
};

export default Home;
