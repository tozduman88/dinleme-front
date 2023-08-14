import { Outlet, useOutletContext } from "react-router-dom";

export default function MiddleLayout() {
    const data = useOutletContext();
    const phrases = data.filter((phrase) => phrase.level === "middle");

    return (
        <div className="container">
            <Outlet context={phrases} />
        </div>
    );
}
