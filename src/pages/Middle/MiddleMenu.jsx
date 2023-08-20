import QuizMenu from "~/components/QuizMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export default function MiddleMenu() {
    const navigate = useNavigate();

    useEffect(() => {
        tg.BackButton.show();
    }, []);

    tg.onEvent("backButtonClicked", () => navigate("/"));

    return <QuizMenu />;
}
