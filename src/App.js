import "./index.css";
import React from "react";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Project from "./pages/project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </main>
  );
}

export default App;
