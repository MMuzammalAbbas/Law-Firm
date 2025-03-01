import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image2 from "../assets/37.jpg";

const Clients: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    const images = [
      '/src/assets/43.jpg',
      '/src/assets/51.jpg',
      
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 7000); // Change image every 7 seconds
  
      return () => clearInterval(interval);
    }, []);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
        // Close other accordions
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
      };
    
      const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
        // Close other accordions
        setIsOpen1(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
      };
    
      const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
        // Close other accordions
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
      };
    
      const toggleAccordion4 = () => {
        setIsOpen4(!isOpen4);
        // Close other accordions
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen5(false);
        setIsOpen6(false);
      };
    
      const toggleAccordion5 = () => {
        setIsOpen5(!isOpen5);
        // Close other accordions
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen6(false);
      };
    
      const toggleAccordion6 = () => {
        setIsOpen6(!isOpen6);
        // Close other accordions
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
      };
    


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
    <h1 className="text-5xl font-bold text-white mb-6">Our Clients</h1>
    <Link to="/contact">
          <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
  </div>
</div>
<div className="max-w-10xl mx-auto py-8 px-4">
  <div className="flex flex-col md:flex-row items-center mb-8">
    <div className="md:w-2/3 mb-4 md:mb-0">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Clients</h2>
      <div className="grid grid-cols-1 gap-4 mr-10">
            {/* Client 1 */}
            <div className="border border-gray-300 rounded-lg w-full mx-auto md:mx-8 ">
            <div className="flex items-center justify-center border-b border-gray-300 py-2 px-4 hover:text-yellow-500 " onClick={toggleAccordion1} style={{cursor: 'pointer'}}>
  <h3 className="text-2xl font-semibold  text-center ">
    Health and Education Sector {isOpen1 ? '-' : '+'}
  </h3>
</div>
  {isOpen1 && (
    <div className="text-gray-700 py-2 px-4">
    {/* Add your related text for Specific Field 1 here */}
    <span className="flex items-center">
      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21 12l-18 10v-20z" />
      </svg>
      Sindh Education Foundation
    </span>
    <span className="flex items-center">
    <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 12l-18 10v-20z" />
    </svg>
    National Skills University, Islamabad
  </span>
  <span className="flex items-center">
    <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 12l-18 10v-20z" />
    </svg>
    Institute of Business Administration
  </span>
  <span className="flex items-center">
    <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M21 12l-18 10v-20z" />
    </svg>
    Higher Education Commission
  </span>
  </div>
  
  )}
</div>
            {/* Client 2 */}
            <div className="border border-gray-300 rounded-lg w-full mx-auto md:mx-8">
              <div className="flex items-center justify-center border-b border-gray-300 py-2 px-4" onClick={toggleAccordion2}>
                <h3 className="text-2xl font-semibold cursor-pointer text-center hover:text-yellow-500 ">
                IT and Telecommunication Sector{isOpen2 ? '-' : '+'}
                </h3>
              </div>
              {isOpen2 && (
                <div className="text-gray-700 py-2 px-4">
                  <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Golootlo, Pakistan
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Pakistan Electronic Media Regulatory Authority (PEMRA)
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   MARS BPO Private Limited
                     </span>
                    
                </div>
              )}
            </div>
            {/* Client 3 */}
            <div className="border border-gray-300 rounded-lg w-full mx-auto md:mx-8">
              <div className="flex items-center justify-center border-b border-gray-300 py-2 px-4" onClick={toggleAccordion3}>
                <h3 className="text-2xl font-semibold cursor-pointer text-center hover:text-yellow-500 ">
                  Banking {isOpen3 ? '-' : '+'}
                </h3>
              </div>
              {isOpen3 && (
                <div className="text-gray-700 py-2 px-4">
                   <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   BankIslami Pakistan Limited
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Zong CMPak Limited
                     </span>
                </div>
              )}
            </div>
            {/* Client 4 */}
            <div className="border border-gray-300 rounded-lg w-full mx-auto md:mx-8">
              <div className="flex items-center justify-center border-b border-gray-300 py-2 px-4" onClick={toggleAccordion4}>
                <h3 className="text-2xl font-semibold cursor-pointer text-center hover:text-yellow-500 ">
                Petroleum and Gas Companies{isOpen4 ? '-' : '+'}
                </h3>
              </div>
              {isOpen4 && (
                <div className="text-gray-700 py-2 px-4">
                    <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Mari Petroleum Company Limited
                     </span>
                </div>
              )}
            </div>
            {/* Client 5 */}
            <div className="border border-gray-300 rounded-lg w-full mx-auto md:mx-8">
              <div className="flex items-center justify-center border-b border-gray-300 py-2 px-4" onClick={toggleAccordion5}>
                <h3 className="text-2xl font-semibold cursor-pointer text-center hover:text-yellow-500 ">
                Regulatory and Government Bodies{isOpen5 ? '-' : '+'}
                </h3>
              </div>
              {isOpen5 && (
                <div className="text-gray-700 py-2 px-4">
                  <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Sindh Revenue Board
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Sindh Workers Welfare Board
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Federal Board of Revenue
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   National Electric Power Regulatory Authority (NEPRA)
                     </span>
                </div>
              )}
            </div>
            {/* Client 6 */}
            <div className="border border-gray-300 rounded-lg w-full mx-auto md:mx-8">
              <div className="flex items-center justify-center border-b border-gray-300 py-2 px-4" onClick={toggleAccordion6}>
                <h3 className="text-2xl font-semibold cursor-pointer text-center hover:text-yellow-500 ">
                 Others{isOpen6 ? '-' : '+'}
                </h3>
              </div>
              {isOpen6 && (
                <div className="text-gray-700 py-2 px-4">
                  <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Karachi Port Trust
                     </span>
                     <span className="flex items-center">
                      <svg className="w-6 h-6 mr-2 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M21 12l-18 10v-20z" />
                   </svg>
                   Durrani Farms, Karachi
                     </span>
                </div>
              )}
            </div>
            {/* Add more sections as needed */}
          </div>
        </div>
        <div className="md:w-1/3">
      <img src={image2} alt="Client Image" className="w-full rounded-lg" />
    </div>
      </div>
    </div>
</div>



    )
}
export default Clients;
