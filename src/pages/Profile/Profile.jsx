import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        tg.BackButton.show();
    }, []);

    tg.onEvent("backButtonClicked", () => navigate("/"));
    return (
        <>
            <h3>Мой профиль</h3>
            <p> Hi user {tg.initDataUnsafe.user.id}</p>
        </>
    );
};

export default Profile;
