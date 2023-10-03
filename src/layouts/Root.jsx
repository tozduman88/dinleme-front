import { Outlet, useLocation, useLoaderData } from "react-router-dom";
import { phrases as phrasesData } from "~/phrases";
import { getCurrentUser } from "~/utils/api"
import { BsFileRuled } from "react-icons/bs";


const tg = window.Telegram.WebApp;
const params = new URLSearchParams(window.location.hash.slice(1));
const initDataString = params.get("tgWebAppData");
const initData = new URLSearchParams(initDataString);
const user = JSON.parse(initData.get("user"));

function Root() {
    const data = useLoaderData()
    const location = useLocation();
    const currentPath = location.pathname;

    if (currentPath === "/") {
        tg.BackButton.hide();
    }
    return (
        <>
            <div className="wrapper">
                <Outlet context={data} />
            </div>
        </>
    );
}

export default Root;

export function loader() {
    const currentUser = getCurrentUser(user.id)
    const phrases = phrasesData
    return { phrases: phrases, currentUser: currentUser }
}
