
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBriefcaseMedical, faBuilding, faLandmark, faPencilAlt, faMoneyBillAlt, faCog, faBolt, faGraduationCap, faAssistiveListeningSystems, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Services: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = [
      '/src/assets/29.jpg',
      '/src/assets/38.jpg',
      
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 7000); // Change image every 7 seconds
  
      return () => clearInterval(interval);
    }, []);
    return(
    <div>
        <div className="services-section relative">
        <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full max-h-[700px] object-cover zoom-animation"
        style={{ transition: 'opacity 1s ease-in-out' }}
      />
        <div className="services-overlay absolute inset-0 flex flex-col justify-center items-center text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">Pakistan's Leading Law Firm</h2>
    <h1 className="text-5xl font-bold text-white mb-6">Services</h1>
    <Link to="/contact">
          <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
  </div>
</div>
<div className="text-section  grid grid-cols-3 gap-0 bg-gray-100">
  <div className="block p-4 ">
    <h2 className="heading text-5xl mt-8 ml-4 font-bold mb-2">Why You Need the Top Lawyers</h2>
    
  </div>
  <div className="block p-4">
    
    <p className="paragraph text-1xl text-gray-700">At MNIP, we understand the complexities and challenges individuals and businesses face in legal matters. With our team of experienced lawyers, we strive to provide unparalleled legal expertise and personalized attention to each client. From intricate corporate transactions to sensitive family law issues, we approach every case with dedication and diligence.</p>
    
  </div>
  <div className="block p-4">
    
    <p className="paragraph text-1xl text-gray-700">What sets us apart is our commitment to client satisfaction. We prioritize communication, ensuring our clients are informed and involved every step of the way. Our track record of successful outcomes speaks to our expertise and dedication. Whether you're navigating a business dispute, seeking guidance on estate planning, or facing a criminal charge, you can trust us to protect your interests and achieve the best possible results.</p>
  </div>
</div>
<div className="practice-areas-section  bg-gray-100 py-8">
      <h2 className="text-4xl font-bold text-center mb-6">Our Practice Areas</h2>
      <div className="flex flex-wrap justify-center">
        {/* Blocks for Practice Areas */}
        {services.map((area, index) => (
          <a key={index} href="/services" className="w-72 h-72 bg-white shadow-lg rounded-lg m-2 flex flex-col justify-center items-center hover:bg-yellow-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={area.icon} className="text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-center mb-2">{area.title}</h3>
            <p className="text-sm text-gray-700 text-center">{area.text}</p>
          </a>
        ))}
        {/* View All Practice Areas Block */}
        
      </div>
    </div>


    </div>
        
    );
};


const services = [
    { title: "CONSTITUTIONAL & ADMINISTRATIVE", icon: faBalanceScale, text: "Represent clients in proceedings against governmental actions, seeking constitutional protection."  },
    { title: "SERVICE & EMPLOYMENT", icon: faUsers, text: " Renowned firm advising on service matters laws, such as appointment and termination." },
    { title: "PROPERTY & REVENUE LAWS", icon: faBuilding, text: "Provide legal advice on property finance transactions and handle disputes involving immovable property." },
    { title: "CONSTRUCTION & ENGINEERING", icon: faLandmark, text: " Advise on construction projects and resolve contractual issues and disputes." },
    { title: "TAXATION & CUSTOM", icon: faCog, text: " Represent clients in tax matters before High Courts and Supreme Court." },
    { title: "INTELLECTUAL PROPERTY", icon: faPencilAlt, text: "Extensive experience in IP registration and litigation matters." },
    { title: "BANKING", icon: faMoneyBillAlt, text: "Advise financial institutions on laws and represent clients in recovery proceedings." },
    { title: "LITIGATION & DISPUTE RESOLUTION", icon: faAssistiveListeningSystems, text: " Represent clients in tax matters before High Courts and Supreme Court." },
    { title: "EDUCATIONAL & CUSTOMS", icon: faGraduationCap, text: "We provide legal counsel tailored for educational institutions and customs, addressing regulatory compliance and operational challenges." },
    { title: "ENERGY", icon: faBolt, text: " Our partners advise on energy projects, ensuring compliance with Pakistani laws and governmental policies." },  
    { title: "CORPORATE LAW", icon: faBriefcaseMedical, text: " Renowned for corporate expertise, we excel in M&A, company operations, and regulatory compliance" },
];  

export default Services;
