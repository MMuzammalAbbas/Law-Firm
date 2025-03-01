import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MidSection from './components/MidSection';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Team from "./pages/Team"; 
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";


const AppRoutes = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<><MidSection /><Home /></>} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/team" element={<Team />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Career />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default AppRoutes;

