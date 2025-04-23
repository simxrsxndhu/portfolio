import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Memes from "./pages/Memes";
import TicTacToe from "./pages/TicTacToe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Credits from "./pages/Credits";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 my-25">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/memes" element={<Memes />} />
              <Route path="/game" element={<TicTacToe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/credits" element={<Credits />} />
            </Routes>
          </div>
        </div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
