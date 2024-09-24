import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PaperCall from "./pages/PaperCall";
import SubmissionRules from "./pages/Submissions";
import RegistrationFees from "./pages/Register";
import Advisory from "./pages/Advisory";
import Org from "./pages/Org";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/callforpaper" element={<PaperCall />} />
        <Route path="/papersubmit" element={<SubmissionRules />} />
        <Route path="/register" element={<RegistrationFees />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/org" element={<Org />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;