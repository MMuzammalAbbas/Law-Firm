import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBriefcaseMedical, faBuilding, faLandmark, faPencilAlt, faMoneyBillAlt, faCog ,faArrowRight} from '@fortawesome/free-solid-svg-icons';

const PracticeAreas: React.FC = () => {

    
    
    

  return (
    <div className="practice-areas-section mt-8 bg-gray-100 py-8">
      <h2 className="text-4xl font-bold text-center mb-6">Our Practice Areas</h2>
      <div className="flex flex-wrap justify-center">
        {/* Blocks for Practice Areas */}
        {practiceAreas.map((area, index) => (
          <a key={index} href="/services" className="w-72 h-72 bg-white shadow-lg rounded-lg m-2 flex flex-col justify-center items-center hover:bg-yellow-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={area.icon} className="text-4xl mb-2" />
            <h3 className="text-xl font-semibold text-center mb-2">{area.title}</h3>
            <p className="text-sm text-gray-700 text-center">{area.text}</p>
          </a>
        ))}
        {/* View All Practice Areas Block */}
        <a href="/services" className="w-72 h-72 bg-white shadow-lg rounded-lg m-2 flex flex-col justify-center items-center hover:bg-yellow-500 transition duration-300 ease-in-out">
          <span className="text-xl font-semibold mb-4">View All Practice Areas</span>
          <div className="mt-2">
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-600 text-xl" />
              </div>
        </a>
      </div>
    </div>
  );
};

const practiceAreas = [
    { title: "CONSTITUTIONAL & ADMINISTRATIVE", icon: faBalanceScale, text: "Represent clients in proceedings against governmental actions, seeking constitutional protection."  },
    { title: "SERVICE & EMPLOYMENT", icon: faBriefcaseMedical, text: " Renowned firm advising on service matters laws, such as appointment and termination." },
    { title: "PROPERTY & REVENUE LAWS", icon: faBuilding, text: "Provide legal advice on property finance transactions and handle disputes involving immovable property." },
    { title: "CONSTRUCTION & ENGINEERING", icon: faLandmark, text: " Advise on construction projects and resolve contractual issues and disputes." },
    
    { title: "INTELLECTUAL PROPERTY", icon: faPencilAlt, text: "Extensive experience in IP registration and litigation matters." },
    { title: "BANKING", icon: faMoneyBillAlt, text: "Advise financial institutions on laws and represent clients in recovery proceedings." },
    
    { title: "TAXATION & CUSTOM", icon: faCog, text: " Represent clients in tax matters before High Courts and Supreme Court." },
  ];
  
export default PracticeAreas;

