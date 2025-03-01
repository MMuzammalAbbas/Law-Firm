
import client1Image from '../assets/10.jpg';
import client2Image from '../assets/6.jpg';
import client3Image from '../assets/5.jpeg';
import client4Image from '../assets/11.png';
import client5Image from '../assets/14.jpg';
import client6Image from '../assets/8.png';
import client7Image from '../assets/9.jpg';
import client8Image from '../assets/12.jpeg';
import client9Image from '../assets/13.png';
import client10Image from '../assets/7.jpg';
import client11Image from '../assets/15.jpeg';
import client12Image from '../assets/16.jpeg';
import client13Image from '../assets/17.png';
import client14Image from '../assets/18.png';
import client15Image from '../assets/19.png';
import client16Image from '../assets/20.png';
import client17Image from '../assets/21.png';
import client18Image from '../assets/22.png';
import client19Image from '../assets/23.png';
import client20Image from '../assets/24.jpeg';
import client21Image from '../assets/25.jpeg';
import client22Image from '../assets/26.png';
import { useState, useEffect } from 'react';

const OurClients: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    client1Image,
    client2Image,
    client3Image,
    client4Image,
    client5Image,
    client6Image ,
    client7Image ,
    client8Image ,
    client9Image ,
    client10Image ,
    client11Image,
    client12Image ,
    client13Image ,
    client14Image ,
    client15Image ,
    client16Image ,
    client17Image ,
    client18Image ,
    client19Image ,
    client20Image ,
    client21Image ,
    client22Image ,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const handleHover = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const target = event.target as HTMLImageElement;
    target.classList.remove('grayscale');
  };

  const handleLeave = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const target = event.target as HTMLImageElement;
    target.classList.add('grayscale');
  };

  return (
    <div className="clients-section  mt-8">
      <h2 className="clients-heading text-4xl font-bold ml-8 mb-2">Our 
      <br/>
      Clients</h2>
      <div className="w-24 mt-0 ml-5 h-3 bg-yellow-500 absolute left-4 mt-2"></div>
      <div className="clients-logos flex justify-center items-center overflow-hidden mt-8 mb-5">
      {[...images, ...images].map((_, index) => {
          const adjustedIndex = (currentImageIndex + index) % images.length;
          if (index < 8) {
          return (
            <img
              key={index}
              src={images[adjustedIndex]}
              alt={`Client ${adjustedIndex + 1}`}
            className="client-logo w-24 mx-4 grayscale transition duration-300 ease-in-out"
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          />
          );
          }
          return null;
          })}
      </div>
    </div>
  );
};

export default OurClients;
