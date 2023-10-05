import WebApp from "@twa-dev/sdk";
import { checkOraddUser } from "~/utils/api";
import { useEffect } from "react";
import Home from "~/pages/Home/Home";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Root from "~/layouts/Root";
import Profile from "./pages/Profile/Profile";
import ListenPage from "~/pages/ListenPage/ListenPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" index element={<Home />} />
            <Route path="profile/:id" element={<Profile />} />

            <Route
                path="listen-phrases"
                lazy={() => import("~/layouts/ListenPageLayout")}
            >
                <Route index={true} element={<ListenPage />} />
            </Route>
        </Route>
    )
);

// const tg = window.WebApp;

function App() {
    const initData = new URLSearchParams(window.location.hash.slice(1)).get(
        "tgWebAppData"
    );

    // if (initData === null) {
    //     throw new Error("Init data is missing");
    // }
    useEffect(() => {
        WebApp.ready();
    }, []);

    useEffect(() => {
        checkOraddUser({ initData: initData });
    }, [initData]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
