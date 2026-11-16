import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.jsx";

function App() {
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
