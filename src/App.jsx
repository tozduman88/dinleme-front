import { useEffect } from "react";
import Home from "~/pages/Home/Home";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import Root from "~/layouts/Root";
import EasyMenu from "~/pages/EasyMenu/EasyMenu";
import MiddleMenu from "~/pages/MiddleMenu/MiddleMenu";
import HardMenu from "~/pages/HardMenu/HardMenu";
import EasyFillGaps from "~/pages/EasyMenu/EasyFillGaps";
import EasyWriteDown from "~/pages/EasyMenu/EasyWriteDown";
import MiddleFillGaps from "~/pages/MiddleMenu/MiddleFillGaps";
import MiddleWriteDown from "~/pages/MiddleMenu/MiddleWriteDown";
import HardWriteDown from "~/pages/HardMenu/HardWriteDown";
import HardFillGaps from "~/pages/HardMenu/HardFillGaps";
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

    const onClose = () => {
        tg.close();
    };
    return (
        <>
            <button onClick={onClose}>Close</button>
            <RouterProvider router={router} />;
        </>
    );
}

export default App;
