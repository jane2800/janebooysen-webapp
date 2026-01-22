import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CV from "./pages/cv-page.jsx";
import HomePage from "./pages/home-page.jsx";
import ProjectPage from "./pages/project-page.jsx";
import Contact from "./pages/contact-page.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;