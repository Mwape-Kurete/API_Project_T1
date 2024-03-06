import "./App.css";

//importing ages
import Compare from "./pages/Compare";
import Timeline from "./pages/Timeline";
import Dashboard from "./pages/Dashboard";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
