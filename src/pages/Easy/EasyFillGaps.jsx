import { useOutletContext } from "react-router-dom";
import FillGapsQuiz from "~/quizzes/FillGapsQuiz/FillGapsQuiz";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

export default function EasyFillGaps() {
    const phrases = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        WebApp.BackButton.show();
    }, []);

    WebApp.onEvent("backButtonClicked", () => navigate("/listen-phrases/easy"));
    return (
        <>
            <FillGapsQuiz phrases={phrases} />
        </>
    );
}
