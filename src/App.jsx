import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";


export default function App() {
  return (
    <Router>
      <div className="h-screen overflow-x-hidden text-neutral-300">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navigation />
      <Routes>
          <Route path="/projects" element={<Project />} />
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>

  );
};

