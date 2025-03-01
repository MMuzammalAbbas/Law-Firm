import React from 'react';

const aboutImage = "/assets/4.jpg";

const AboutUs: React.FC = () => {
  return (
<div className="about-section flex flex-col items-center mt-14 max-h-800 sm:flex-row">
  <div className="about-content max-w-2xl px-8 py-6 mb-14 sm:mb-0 sm:mr-8 sm:w-1/2">
    <h2 className="about-heading text-3xl font-bold mb-4 text-yellow-500">About Us</h2>
    <p className="about-paragraph text-2xl text-gray-800">
    MNIP Law Firm stands as a premier legal institution, boasting a formidable team of over fifty legal professionals spread across key locations in Pakistan. With our presence not only in the bustling commercial center of Karachi but also in the federal capital, Islamabad, we offer a comprehensive range of legal services.    </p>
    <div className="w-24 h-1 bg-yellow-500 absolute left-4 mt-3 ml-4 sm:hidden"></div>
    <p className="about-paragraph text-lg text-gray-500 mt-9">
    Our practice spans diverse areas of law, and we take pride in serving a broad spectrum of clients, including corporations, public and private limited companies, as well as individuals with substantial assets.  </p>
    <p className="about-paragraph text-lg text-gray-500">
    At MNIP Law Firm, our approach is collaborative and interdisciplinary. Our lawyers specialize in complementary areas of law, allowing us to assemble dynamic teams capable of providing innovative and holistic legal solutions to our clients. </p>
    <p className="about-paragraph text-lg text-gray-500">
    Renowned for our expertise in complex dispute resolution, commercial transactions, and advisory services, MNIP Law Firm is synonymous with intellectual rigor, practical insight, and a proven track record of achieving favorable outcomes for our clients.    </p>
    <div className="dotted-line mt-8 w-full border-t-2 border-yellow-500 border-dotted"></div>
  </div>
  <div className="about-image-container max-w-full sm:w-1/2 px-8 py-6 sm:ml-8">
    <img src={aboutImage} alt="About Us" className="about-image h-full rounded-lg shadow-md" />
  </div>
</div>







  );
};

export default AboutUs;
