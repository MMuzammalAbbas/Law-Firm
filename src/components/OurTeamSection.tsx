import React from 'react';
import { FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import './OurTeamSection.css'; // Import your CSS file

const image1 = "/assets/30.jpg";
const image2 = "/assets/30.jpg";
const image3 = "/assets/30.jpg";
const image4 = "/assets/30.jpg";
const image5 = "/assets/30.jpg";
const image6 = "/assets/30.jpg";
const image7 = "/assets/30.jpg";
const image8 = "/assets/30.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

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


const OurTeamSection: React.FC = () => {
  return (
    <section className="section">
      <h2 className="text-5xl text-yellow-500 text-center md:text-center mt-10 ml-4 font-bold">
        <span className="text-yellow-500">Our</span><br className="md:hidden" />
        Team
        
      </h2>
      <div className="container">
        {images.map((image, index) => (
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
  );
}

export default OurTeamSection;