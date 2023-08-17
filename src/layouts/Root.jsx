import { Outlet, useLocation } from "react-router-dom";
import { phrases } from "~/phrases";

const tg = window.Telegram.WebApp;

function Root() {
    const location = useLocation();
    const currentPath = location.pathname;

    if (currentPath === "/") {
        tg.BackButton.hide();
    }
    return (
        <>
            <div className="wrapper">
                <Outlet context={phrases} />
            </div>
        </>
    );
}

export default Root;
