import { useOutletContext } from "react-router-dom";
import WriteDownQuiz from "~/quizzes/WriteDownQuiz/WriteDownQuiz";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

export default function MiddleWriteDown() {
    const phrases = useOutletContext();

    const navigate = useNavigate();

    useEffect(() => {
        WebApp.BackButton.show();
    }, []);

    WebApp.onEvent("backButtonClicked", () => navigate("/middle"));

    return (
        <>
            <WriteDownQuiz phrases={phrases} />
        </>
    );
}
