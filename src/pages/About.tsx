import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const About: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = [
      '/assets/42.jpg',
      '/assets/41.jpg',
      
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
    <h1 className="text-5xl font-bold text-black mb-6">About Us</h1>
    <Link to="/contact">
          <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
  </div>
  
</div>

<div className="mx-10 py-10 px-10">
      {/* Text on the left, Image on the right */}
      <div className="flex flex-wrap items-center mb-10">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About MNIP Law Firm</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MNIP Law Firm stands as a beacon of legal excellence, proudly serving our clients as a premier law firm in Pakistan. Situated in the heart of Islamabad, the capital city, our firm is synonymous with unwavering commitment, deep expertise, and unmatched dedication in the field of law. Our journey is guided by three fundamental principles: Excellence, Integrity, and Client-Centricity.
          </p>
          <h2 className="text-3xl font-bold mb-4 mt-6">Leaders in Diverse Legal Specializations</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          MNIP Law Firm isn't just a legal entity; it's a gathering of legal experts, each specializing in various facets of the law. Our team comprises over 20 members, including lawyers, barristers, solicitors, and paralegals. We've earned global recognition for our comprehensive legal services, excelling in transactional, litigation, corporate, and regulatory domains. Whether it's corporate law, litigation, intellectual property, or international arbitration, our diverse team ensures tailored legal counsel to meet your unique needs. 
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/assets/34.jpg" alt="MNIP Law Firm" className="w-full rounded-lg" />
        </div>
      </div>

      {/* Text on the right, Image on the left (for smaller screens) */}
      <div className="flex flex-wrap items-center mt-10">
  <div className="w-full md:w-1/2 order-2 md:order-1 pr-4">
    <img src="/assets/36.jpg" alt="MNIP Law Firm" className="w-full rounded-lg" />
  </div>
  <div className="w-full md:w-1/2 mb-4 md:mb-0 order-1 md:order-2 pl-4">
    <h2 className="text-3xl font-bold mb-4">Putting Clients First</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
    At MNIP Law Firm, we understand that each client is unique, and their legal needs vary. That's why we adopt a client-centric approach, placing your success and satisfaction at the forefront of our priorities. We take the time to listen, understand, and tailor our legal strategies to meet your specific goals. Your success is our success, and we relentlessly pursue excellence to secure the best possible outcomes for you.
    </p>
    <h2 className="text-3xl font-bold mb-4">Unveiling Excellence in Legal Practice</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
    At MNIP Law Firm, we're emblematic of unparalleled expertise and experience. At our core are legal professionals who bring unparalleled expertise and extensive experience to the table. With a legacy spanning decades, our seasoned lawyers have successfully handled myriad complex legal cases, offered innovative solutions, and achieved remarkable outcomes for our clients. We take pride in our comprehensive knowledge of Pakistan's legal landscape, enabling us to provide insightful advice and strategic guidance.
    </p>
  </div>
</div>

    </div>
</div>
    )
}
export default About;