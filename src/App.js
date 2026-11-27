import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import UnderConstruction from "./components/UnderConstruction.jsx";

// Set REACT_APP_UNDER_CONSTRUCTION=true in Vercel (Production only) to show the holding sign.
// Remove it and redeploy to bring the portfolio back.
const UNDER_CONSTRUCTION = process.env.REACT_APP_UNDER_CONSTRUCTION === "true";

function App() {
    if (UNDER_CONSTRUCTION) return <UnderConstruction />;

    return (
        <Router>
            <Routes>
                <Route path="/cv" element={<HomePage section="cv" />} />
                <Route path="/project" element={<HomePage section="work" />} />
                <Route path="/contact" element={<HomePage section="contact" />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
