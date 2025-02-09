import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import AnimaitonProvider from "./context/AnimationContext.jsx";
import SmoothScrolling from "./context/SmoothScroll.tsx";

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <AnimaitonProvider>
            <SmoothScrolling>
                <App />
            </SmoothScrolling>
        </AnimaitonProvider>
    </HashRouter>
);
