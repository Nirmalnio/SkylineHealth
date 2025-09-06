import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HomeCare from "./pages/HomeCare";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Funding from "./pages/Funding";
import DementiaCarePage from "./pages/Services/Dementia";
import AlzheimerCarePage from "./pages/Services/Alzheimer";
import ParkinsonCarePage from "./pages/Services/Parkinson";
import ContinenceCarePage from "./pages/Services/Continence";
import ComplexCarePage from "./pages/Services/Complex";
import RespiteCarePage from "./pages/Services/Respite";
import EndOfLifeCarePage from "./pages/Services/EndOfLife";
import ChallengingBehaviourCarePage from "./pages/Services/ChallengingBehaviour";
import ContactUsPage from "./pages/Contact";
import PrivacyPolicyPage from "./pages/Privacy";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home-care" element={<HomeCare />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/services/dementia-care" element={<DementiaCarePage />} />
        <Route path="/services/alzheimers-care" element={<AlzheimerCarePage />} />
        <Route path="/services/parkinsons-care" element={<ParkinsonCarePage />} />
        <Route path="/services/continence-care" element={<ContinenceCarePage />} />
        <Route path="/services/complex-care" element={<ComplexCarePage />} />
        <Route path="/services/respite-care" element={<RespiteCarePage />} />
        <Route path="/services/end-of-life-care" element={<EndOfLifeCarePage />} />
        <Route path="/services/challenging-behaviours-care" element={<ChallengingBehaviourCarePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;