import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <div className="wrapper">
                <Outlet />
            </div>
        </>
    );
}

export default Root;
