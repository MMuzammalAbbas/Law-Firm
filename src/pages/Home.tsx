import React from 'react';
import OurClients from '../components/OurClients';
import AboutUs from '../components/AboutUs';
import PracticeAreas from '@/components/PracticeAreas';
import FamilyLawSection from "@/components/FamilyLawSection";
import OurTeamSection from '@/components/OurTeamSection';
// import image30 from "../assets/30.jpg";
const Home = () => {
    return (
        <div>
           
            <OurClients />
            <AboutUs/>
            <PracticeAreas />
            <FamilyLawSection/>
            <OurTeamSection/> 
            

            
        </div>
    );
};

export default Home;
