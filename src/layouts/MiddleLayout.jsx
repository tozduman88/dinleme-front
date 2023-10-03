import { Outlet, useOutletContext } from "react-router-dom";

export default function MiddleLayout() {
    const data = useOutletContext();
    const phrases = data.filter((phrase) => phrase.level === "middle");
    console.log("phrases from MiddleLayout", phrases)
    return (
        <div className="quiz">
            <Outlet context={phrases} />
        </div>
    );
}
