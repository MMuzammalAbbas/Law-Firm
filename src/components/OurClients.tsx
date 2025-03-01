
import { useState, useEffect } from 'react';

const OurClients: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/10.jpg",
    "/assets/6.jpg",
    "/assets/5.jpeg",
    "/assets/11.png",
    "/assets/14.jpg",
    "/assets/8.png",
    "/assets/9.jpg",
    "/assets/12.jpeg",
    "/assets/13.png",
    "/assets/7.jpg",
    "/assets/15.jpeg",
    "/assets/16.jpeg",
    "/assets/17.png",
    "/assets/18.png",
    "/assets/19.png",
    "/assets/20.png",
    "/assets/21.png",
    "/assets/22.png",
    "/assets/23.png",
    "/assets/24.jpeg",
    "/assets/25.jpeg",
    "/assets/26.png",
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
