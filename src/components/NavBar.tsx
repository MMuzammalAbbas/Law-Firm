import { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from "../assets/up.png";
import un from "../assets/un.png";


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  

  return (
    <nav className={`bg-white ${isOpen ? 'bg-white' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 list-none">
            <CustomLink to="/" className="flex items-center ">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
              <img className="h-14 w-auto ml-4" src={un} alt="Second Logo" /> 
              <span className="font-bold text-xl ml-2"></span>
            </CustomLink>
          </div>
          <div className="block md:hidden">
            <button onClick={toggleMenu} className={`inline-flex items-center justify-center p-2 rounded-md ${isOpen ? 'text-yellow-500' : 'text-black'} hover:text-yellow-500 focus:outline-none`}>
              <svg className={`${isOpen ? 'hidden' : 'block' } h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-10 flex items-baseline space-x-4 list-none">
                <CustomLink to="/" className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/' ? 'text-yellow-500' : 'text-black'}`}>Home</CustomLink>
                <CustomLink to="/about" className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/about' ? 'text-yellow-500' : 'text-black'}`}>About Us</CustomLink>
                <CustomLink to="/services" className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold   ${pathname === '/services' ? 'text-yellow-500' : 'text-black'}`}>Services</CustomLink>
                <CustomLink to="/clients" className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold   ${pathname === '/clients' ? 'text-yellow-500' : 'text-black'}`} >Clients</CustomLink>
                <CustomLink to="/team" className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/team' ? 'text-yellow-500' : 'text-black'}`}>Team</CustomLink>
                <CustomLink to="/careers" className={`text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/careers' ? 'text-yellow-500' : 'text-black'}`}>Careers</CustomLink>
                <Link to="/contact" className="inline-block px-4 py-2 mx-2 border-2 border-gray-500 rounded-md bg-white text-gray-500  text-lg font-semibold hover:text-yellow-500 hover:border-yellow-500">Contact Us</Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 list-none">
        <Link to="/" onClick={closeMenu} className={`text-black block  hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/' ? 'text-yellow-500' : 'text-black'}`}>Home</Link>
          <Link to="/about" onClick={closeMenu} className={`text-black block  hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/about' ? 'text-yellow-500' : 'text-black'}`}>About Us</Link>
          <Link to="/services" onClick={closeMenu} className={`text-black block hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold   ${pathname === '/services' ? 'text-yellow-500' : 'text-black'}`}>Services</Link>
          <Link to="/clients" onClick={closeMenu} className={`text-black block  hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold   ${pathname === '/clients' ? 'text-yellow-500' : 'text-black'}`} >Clients</Link>
          <Link to="/team" onClick={closeMenu} className={`text-black block hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/team' ? 'text-yellow-500' : 'text-black'}`}>Team</Link>
          
          <Link to="/careers" onClick={closeMenu} className={`text-black block hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold  ${pathname === '/careers' ? 'text-yellow-500' : 'text-black'}`}>Careers</Link>
          <Link to="/contact" onClick={closeMenu} className={`text-black block hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold`}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;







