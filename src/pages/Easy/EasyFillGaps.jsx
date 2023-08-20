import { useOutletContext } from "react-router-dom";
import FillGapsQuiz from "~/quizzes/FillGapsQuiz/FillGapsQuiz";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export default function EasyFillGaps() {
    const phrases = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        tg.BackButton.show();
    }, []);

    tg.onEvent("backButtonClicked", () => navigate("/easy"));
    return (
        <>
            <FillGapsQuiz phrases={phrases} />
        </>
    );
}
