import MenuButton from "~/components/MenuButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

const ListenPhrases = () => {
    const navigate = useNavigate();

    useEffect(() => {
        WebApp.BackButton.show();
    }, []);

    WebApp.onEvent("backButtonClicked", () => navigate("/"));
    return (
        <>
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

export default ListenPhrases;
