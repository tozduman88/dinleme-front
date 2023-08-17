import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export default function EasyLayout() {
    const data = useOutletContext();
    const phrases = data.filter((phrase) => phrase.level === "easy");

    useEffect(() => {
        tg.BackButton.show();
    }, []);

    return (
        <div className="quiz">
            <Outlet context={phrases} />
        </div>
    );
}
