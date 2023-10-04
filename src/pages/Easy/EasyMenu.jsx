import QuizMenu from "~/components/QuizMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

export default function EasyMenu() {
    const navigate = useNavigate();

    useEffect(() => {
        WebApp.BackButton.show();
    }, []);

    WebApp.onEvent("backButtonClicked", () => navigate("/"));

    return <QuizMenu />;
}
