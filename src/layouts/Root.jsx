import { Outlet, useLocation } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import SideBarMenu from "~/components/SideBarMenu";
import { useState } from "react";

// const params = new URLSearchParams(window.location.hash.slice(1));
// const initDataString = params.get("tgWebAppData");
// const initData = new URLSearchParams(initDataString);
// const user = JSON.parse(initData.get("user"));

function Root() {
    const location = useLocation();
    const currentPath = location.pathname;

    if (currentPath === "/") {
        WebApp.BackButton.hide();
    }

    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const toggle = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <>
            <button onClick={toggle}>toggle</button>
            <div className="wrapper">
                <SideBarMenu menuIsOpen={menuIsOpen} toggle={toggle} />
                <Outlet />
            </div>
        </>
    );
}

export default Root;
