import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navigation"
import Home from "./pages/Home";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import About from "./pages/About";


export default function App() {
  return (
      <div className="min-h-screen bg-white">
    <Router>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
        </div>
  );
}
