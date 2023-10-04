import { Outlet, useLocation } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import SideBarMenu from "~/components/SideBarMenu";
import { useState } from "react";
import StickyUpperBar from "~/components/StickyUpperBar";

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

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const toggle = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <>
            <div
                className="wrapper"
                onClick={() => {
                    if (menuIsOpen) {
                        setMenuIsOpen(false);
                    }
                }}
            >
                <StickyUpperBar toggle={toggle} />
                <SideBarMenu menuIsOpen={menuIsOpen} toggle={toggle} />
                <Outlet />
            </div>
        </>
    );
}

export default Root;
