import QuizMenu from "~/components/QuizMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export default function EasyMenu() {
    const navigate = useNavigate();

    useEffect(() => {
        tg.BackButton.show();
    }, []);

    tg.onEvent("backButtonClicked", () => navigate(-1));
    s;

    return <QuizMenu />;
}
