import { Outlet, useOutletContext } from "react-router-dom";

export default function EasyLayout() {
    const data = useOutletContext();
    const phrases = data.phrases.filter((phrase) => phrase.level === "easy");
    const currentUser = data.currentUser

    return (

        <div className="quiz">
            {currentUser}
            <Outlet context={phrases} />
        </div>
    );
}
