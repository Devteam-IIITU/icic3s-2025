import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PaperCall from "./pages/PaperCall";
import SubmissionRules from "./pages/Submissions";
import RegistrationFees from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/callforpaper" element={<PaperCall />} />
        <Route path="/papersubmit" element={<SubmissionRules />} />
        <Route path="/register" element={<RegistrationFees />} />
      </Routes>
    </Router>
  );
};

export default App;