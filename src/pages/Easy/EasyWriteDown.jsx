import { useOutletContext } from "react-router-dom";
import WriteDownQuiz from "~/quizzes/WriteDownQuiz/WriteDownQuiz";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export default function EasyWriteDown() {
    const phrases = useOutletContext();

    const navigate = useNavigate();

    useEffect(() => {
        tg.BackButton.show();
    }, []);

    tg.onEvent("backButtonClicked", () => navigate("/easy"));

    return (
        <>
            <WriteDownQuiz phrases={phrases} />
        </>
    );
}
