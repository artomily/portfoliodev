import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import About from "./pages/About";


export default function App() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projec  ts" element={<Project />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
