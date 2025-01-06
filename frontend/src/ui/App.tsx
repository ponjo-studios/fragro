import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";

import "@ui/css/App.css";
import Navbar from "@ui/navbar";

declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
}

function App() {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);

    return (
        <div className={"App"}>
            <Routes>
                <Route path={"/"} element={<Navbar />} />
            </Routes>
        </div>
    );
}

export default App;
