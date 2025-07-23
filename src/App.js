import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HomeCare from "./pages/HomeCare";
import Header from './layouts/Header';
import Footer from './components/Footer';
import Funding from "./pages/Funding";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home-care" element={<HomeCare />} />
        <Route path="/funding" element={<Funding />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;