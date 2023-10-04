import { Outlet, useOutletContext } from "react-router-dom";

export default function EasyLayout() {
    const data = useOutletContext();
    const phrases = data.filter((phrase) => phrase.level === "easy");
    console.log("phrases from easyLayout", phrases);

    return (
        <>
            <Outlet context={phrases} />
        </>
    );
}
