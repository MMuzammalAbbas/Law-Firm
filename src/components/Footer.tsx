
import { FaPhoneSquare,FaEnvelopeSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/lgbg.png";

const Footer = () => {
 
   [];

  return (
    <footer className="bg-gradient-to-t from-yellow-500 to-yellow-500  text-white py-8 relative">
      <div className="containers mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-4 flex flex-col items-center">
              <img src={logo} alt="Organization Logo" className="mb-4" />
         </div>

          <div className="px-4 flex flex-col items-center">
            <h3 id="links" className="text-3xl font-bold mb-4 footer-heading text-black">
              Links
            </h3>
            <ul className="text-center text-black ">
              <li><Link to="/" className="text-2xl hover:text-white hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-2xl hover:text-white hover:underline">About Us</Link></li>
              <li><Link to="/services" className="text-2xl hover:text-white hover:underline">Services</Link></li>
              <li><Link to="/contact" className="text-2xl hover:text-white hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="px-4 flex flex-col items-center">
            <h3 id="contact-us" className="text-3xl font-bold mb-4 footer-heading text-black">
              OUR OFFICES
            </h3>
            <h2 id="contact-us" className="text-2xl font-bold mb-2 footer-heading text-black">
              Islamabad
            </h2>
            <p className="text-sm text-black">
              12-A, Street 9, Hamza Road <br />
               Sector F-11/1, Islamabad.<br />
               <a className="text-black hover:text-white" href="tel:+923205059084">
        <FaPhoneSquare className="inline mr-2" /> {/* Phone icon */}
        +92 320 5059084
      </a><br />
      <a className="text-black hover:text-white" href="mailto:hamza.malik1@yahoo.com">
        <FaEnvelopeSquare className="inline mr-2" /> {/* Email icon */}
        hamza.malik1@yahoo.com
      </a><br />
           </p>
           <h2 id="contact-us" className="text-2xl mt-2 font-bold mb-3footer-heading text-black">
              Karachi
            </h2>
            <p className="text-sm ml-4 text-black">
                A-2, 1st Floor, Shafeeq Plaza, <br />
                Block-A, Shaheed Sarwar Road, <br />
                Karachi<br />
           <a className="text-black hover:text-white" href="tel:+923205059084">
        <FaPhoneSquare className="inline mr-2" /> {/* Phone icon */}
        +021 33484312
      </a><br />
      <a className="text-black hover:text-white" href="mailto:hamza.malik1@yahoo.com">
        <FaEnvelopeSquare className="inline mr-2" /> {/* Email icon */}
        talhaabbasi.k@gmail.com
      </a><br />
            </p>
             
        
          </div>
          <div className="px-4 flex flex-col items-center">
            <h3 id="follow-us" className="text-3xl font-bold mb-4 footer-heading text-black">
              Follow Us
            </h3>
            <ul className="flex space-x-4 text-center text-black">
              <li>
                 <a href="#" className="text-2xl hover:text-white hover:underline">
                  <FaFacebook />
                 </a>
              </li>
              <li>
                  <a href="#" className="text-2xl hover:text-white hover:underline">
                   <FaTwitter />
                  </a>
              </li>
              <li>
                   <a href="#" className="text-2xl hover:text-white hover:underline">
                     <FaInstagram />
                   </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-900 h-2" />
        <div className="text-center text-sm text-black">
          <p>&copy; 2024 MNIP Law Firm. All rights reserved.</p>
          <p><Link to="/terms">Terms of Service</Link> | <Link to="/privacy">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




