import { Outlet } from "react-router-dom";
import { phrases } from "~/phrases";

function Root() {
    return (
        <>
            <div className="wrapper">
                <Outlet context={phrases} />
            </div>
        </>
    );
}

export default Root;
