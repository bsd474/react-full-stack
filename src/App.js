import "./index.css";
import React from "react";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar>
        <div className=" max-w-7xl mx-auto">
          <Employees />
        </div>
      </Navbar>
    </main>
  );
}

export default App;
