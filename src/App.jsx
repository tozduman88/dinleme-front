const tg = window.Telegram.WebApp;
import { useEffect } from "react";
import { Home } from "./pages/Home/Home";

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
            <Home />
        </>
    );
}

export default App;
