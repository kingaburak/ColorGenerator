import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import GeneratorPage from "./pages/GeneratorPage/GeneratorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generator" element={<GeneratorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
