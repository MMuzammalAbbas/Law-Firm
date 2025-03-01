import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Career = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        office: '',
        cv: null as File | null,
        description: ''
    });
    
    const images = [
        '/assets/39.jpg',
        '/assets/40.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 7 seconds

        return () => clearInterval(interval);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, cv: e.target.files[0] });
        }
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can access formData object containing all form data including uploaded CV file
        
        // You can now proceed to send this data via email or do any other desired action
        try {
            const response = await axios.post('http://localhost:5000/api/careers/submit-form', formData);
            console.log(response.data);
            // Reset form after successful submission
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              office: '',
              cv: null,
              description: ''
            });
          } catch (error) {
            console.error(error);
          }
        };
   
    


    return (
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
                    <h1 className="text-5xl font-bold text-white mb-6">Careers</h1>
                    <Link to="/contact">
                        <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            <div className="text-section grid grid-cols-3 gap-0 bg-gray-100">
                <div className="block p-4">
                    <h2 className="heading text-5xl mt-8 ml-4 font-bold mb-2">Why Join MNIP?</h2>
                </div>
                <div className="block p-4">
                    <p className="paragraph text-1xl text-gray-700">At MNIP, we offer more than just a job. We provide an opportunity to be part of a dynamic team that is committed to excellence and innovation. With a focus on personal and professional growth, we empower our employees to reach their full potential.</p>
                </div>
                <div className="block p-4">
                    <p className="paragraph text-1xl text-gray-700">Joining MNIP means joining a community of passionate individuals dedicated to making a difference. Whether you're a seasoned professional or just starting your career, we welcome diversity and value the unique perspectives each team member brings.</p>
                </div>
            </div>
            <div className="flex justify-center ">
            <div className=" mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
  <form className="max-w-lg w-full mb-10 mt-10 " onSubmit={sendEmail}>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="firstName"
          type="text"
          
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}

        />
      </div>
      <div className="w-full md:w-1/2 px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="phone"
          type="tel"
          placeholder="Phone Number"
          onChange={handleChange}
        />
      </div>
      <div className="w-full md:w-1/2 px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="office">
          Office
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="office" onChange={handleChange}
        >
          <option value="">Select Office</option>
          <option value="office1">Islamabad</option>
          <option value="office2">Karachi</option>
        </select>
      </div>
      <div className="w-full px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
          Upload your CV
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange} 
          
        />
      </div>
      <div className="w-full px-4 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-black"
          id="description"
          rows={4}
          placeholder="Tell us about yourself..."
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
    <div className="flex justify-center"> {/* Center the submit button */}
        <button
          className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
  </form>
</div>
</div>



        </div>
    );
};

export default Career;

