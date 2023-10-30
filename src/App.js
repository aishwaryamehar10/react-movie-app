import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar/><About /></>} />
        <Route path="/blog" element={<><Navbar/><Blog /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
