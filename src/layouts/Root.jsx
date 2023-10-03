import { Outlet, useLocation } from "react-router-dom";

const tg = window.Telegram.WebApp;
// const params = new URLSearchParams(window.location.hash.slice(1));
// const initDataString = params.get("tgWebAppData");
// const initData = new URLSearchParams(initDataString);
// const user = JSON.parse(initData.get("user"));

function Root() {
    const location = useLocation();
    const currentPath = location.pathname;

    if (currentPath === "/") {
        tg.BackButton.hide();
    }
    return (
        <>
            <div className="wrapper">
                <Outlet />
            </div>
        </>
    );
}

export default Root;


