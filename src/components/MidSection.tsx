import React, { useState, useEffect } from 'react';
import "../components/MidSection.css"; // Import the CSS file for the MidSection component

const image1 = "/assets/mdsection.png";


const MidSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
    <div className="mid-section relative ">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full max-h-[700px] object-cover zoom-animation"
        style={{ transition: 'opacity 1s ease-in-out' }}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-left z-10 pointer-events-none">
        <div className=" bg-opacity-50 px-4 py-8 text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-left">
            <span className="text-yellow-500">PAKISTAN'S LEADING LAW FIRM</span>
            <span className="inline-block w-20 h-2 bg-yellow-500 ml-2"></span> {/* Yellow line immediately after the text */}
          </h2>
          <div className="flex items-center">
  <img src={image1} alt="MNIP Logo" className="h-12 md:h-16 lg:h-20" /> {/* Adjust height as needed */}
</div>
          <div className="w-24 h-1 bg-yellow-500 absolute left-4 mt-2"></div>
          <p className="text-base md:text-lg lg:text-xl text-white mt-4 px-4">
            MALIK NAEEM IQBAL & PARTNERS is a law firm based in Karachi and Islamabad providing,
            <br/>
            a diverse range of legal services to domestic and foreign clients. We have a
            <br/>
            dynamic and professional team of foreign as well locally qualified lawyers,
            <br/>
            providing transactional, advisory and adversarial legal services in a timely,
            <br/>
            confidential, and cost-effective manner.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default MidSection;
