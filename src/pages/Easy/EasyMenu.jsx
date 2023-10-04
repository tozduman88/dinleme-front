import QuizMenu from "~/components/QuizMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import WebApp from "@twa-dev/sdk";
import { BackButton } from "@tma.js/sdk";

const backButton = new BackButton("6.3");

export default function EasyMenu() {
    const navigate = useNavigate();

    useEffect(() => {
        backButton.show();
    }, []);

    backButton.on("click", () => navigate("/listen-phrases"));

    return <QuizMenu />;
}
