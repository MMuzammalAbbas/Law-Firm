import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import './styles/Team.css';

const image1 = "/assets/30.jpg";
const image2 = "/assets/31.jpg";
const image3 = "/assets/32.jpg";
const image4 = "/assets/33.jpg";
const image5 = "/assets/34.jpg";
const image6 = "/assets/35.jpg";
const image7 = "/assets/36.jpg";
const image8 = "/assets/37.jpg";





const imagess = [image1, image2, image3, image4, image5, image6, image7, image8];

const teamMembers = [
  { name: "Malik Naeem Iqbal", position: "Managing Partner",job:"Advocate Supreme Court", qualification: "Master of Law degree from Sindh Muslim Law College", email: "maliknaeem1982@hotmail.com", phone: "0321-2400831" },
  {
    name: "Qaisar Sarwar",
    position: "Partner",
    job: "Advocate High Court",
    qualification: "Law degree from Sindh Muslim Law College, Karachi (2005)",
    email: "qaisarsarwar.adv@gmail.com",
    phone: "0334-3707803"
},
{
    name: "Malik Waseem Iqbal",
    position: "Partner",
    job: "Advocate High Court",
    qualification: "LLB from Sindh Muslim Law College, Karachi (2013)",
    email: "iwaseem30@yahoo.com",
    phone: "0321-5251461"
},
{
    name: "Ali Hamza Malik",
    position: "Partner",
    job: "Barrister-at-Law",
    qualification: "LLB (Honors) from the University of London, UK",
    email: "hamza.malik1@yahoo.com",
    phone: "0320-5059084"
},
{
    name: "Muhammad Nasir Hussain",
    position: "Partner",
    job: "Advocate High Court",
    qualification: "LLB from S.M. Law College, Karachi (2002); LLM from S.M. Law College, Karachi (2007)",
    email: "muhammad.nasir74@gmail.com",
    phone: "0334-3060191"
},
{
    name: "Muhammad Talha Abbasi",
    position: "Partner",
    job: "Barrister-at-Law",
    qualification: "LLB (Hons) from BPP University London (2018); Barrister training at Lincoln’s Inn, London, UK",
    email: "talhaabbasi.k@gmail.com",
    phone: "0333-6667809"
},
{
    name: "Muhammad Nasir Hussain",
    position: "Partner",
    job: "Advocate High Court",
    qualification: "MSc. Operations & Business Management from Glasgow Caledonian University (2010); LLB from University of London (2014)",
    email: "ghumrowaheed@yahoo.com",
    phone: "0333-2777426"
},
{
    name: "Hamza Khalid Niazi",
    position: "Partner",
    job: "Advocate",
    qualification: "LLB (Honours) and LLM in Corporate Law from Bahria University Islamabad",
    email: "hkniazi70@gmail.com",
    phone: "0312-5965252"
}
];






const Team: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const images = [
      '/assets/35.jpg',
      '/assets/46.jpg',
      
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
    <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
    <Link to="/contact">
          <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
  </div>
</div>

<div className="text-section grid grid-cols-3 gap-0 bg-gray-100">
  <div className="block p-4">
    <h2 className="heading text-5xl mt-8 ml-4 font-bold mb-2">Meet our Team</h2>
    </div>
    <div className="block p-4">
    <p className="paragraph text-1xl text-gray-700">Welcome to MNIP Team, a premier law firm dedicated to providing exceptional legal services to individuals and businesses alike. With a team of highly skilled and experienced lawyers, we specialize in a wide range of practice areas, including corporate law, family law, real estate law, criminal defense, and more.</p>
  </div>
  <div className="block p-4">
    <p className="paragraph text-1xl text-gray-700">At MNIP Team, our mission is to deliver comprehensive legal solutions tailored to meet the unique needs of each client. Whether you require assistance with complex litigation, contract negotiation, estate planning, or any other legal matter, our dedicated attorneys are here to guide you every step of the way.</p>
  </div>
  
</div>
<section className="section">
      <h2 className="text-5xl text-black text-center md:text-center mt-10 ml-4 font-bold">
        <span >Our</span><br className="md:hidden" />
        Team
       
      </h2>
      <div className="container">
        {imagess.map((image, index) => (
          <div className="blocks" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
            <div className="details">
              <h3>{teamMembers[index].name}</h3>
              <h3 className='position text-yellow-500'>{teamMembers[index].position}</h3>
              <div className='mt-4'>
              <p className='job text-gray-500'> {teamMembers[index].job}</p>
              <p className='qualification text-gray-500'> {teamMembers[index].qualification}</p>

            <p>
              <FaPhoneSquare className="inline mr-2" /> {/* Phone icon */}
              <a href={`tel:${teamMembers[index].phone}`}>{teamMembers[index].phone}</a>
            </p>
            <p>
              <FaEnvelope className="inline mr-2" /> {/* Email icon */}
              <a href={`mailto:${teamMembers[index].email}`}>{teamMembers[index].email}</a>
            </p>

              </div>
                        
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex justify-center mt-10 mb-8">
          <a href="/team" className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
        MEET THE TEAM
      </a>
    </div>
    </section>

</div>
    )
}
export default Team;