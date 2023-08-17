import { useEffect } from "react";
import Home from "~/pages/Home/Home";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Root from "~/layouts/Root";
import EasyMenu from "~/pages/Easy/EasyMenu";
import MiddleMenu from "~/pages/Middle/MiddleMenu";
import HardMenu from "~/pages/Hard/HardMenu";
import EasyFillGaps from "~/pages/Easy/EasyFillGaps";
import EasyWriteDown from "~/pages/Easy/EasyWriteDown";
import MiddleFillGaps from "~/pages/Middle/MiddleFillGaps";
import MiddleWriteDown from "~/pages/Middle/MiddleWriteDown";
import HardWriteDown from "~/pages/Hard/HardWriteDown";
import HardFillGaps from "~/pages/Hard/HardFillGaps";
import EasyLayout from "./layouts/EasyLayout";
import MiddleLayout from "./layouts/MiddleLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" index element={<Home />} />
            <Route path="easy" element={<EasyLayout />}>
                <Route index={true} element={<EasyMenu />} />
                <Route path="write-down" element={<EasyWriteDown />} />
                <Route path="fill-gaps" element={<EasyFillGaps />} />
            </Route>
            <Route path="middle" element={<MiddleLayout />}>
                <Route index={true} element={<MiddleMenu />} />
                <Route path="write-down" element={<MiddleWriteDown />} />
                <Route path="fill-gaps" element={<MiddleFillGaps />} />
            </Route>
            <Route path="hard">
                <Route index={true} element={<HardMenu />} />
                <Route path="write-down" element={<HardWriteDown />} />
                <Route path="fill-gaps" element={<HardFillGaps />} />
            </Route>
        </Route>
    )
);

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
