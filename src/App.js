import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CV from "./pages/CV.jsx";
import HomePage from "./pages/Home.jsx";
import ProjectPage from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

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