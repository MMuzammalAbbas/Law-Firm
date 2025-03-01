import React from 'react';
import image25 from '../assets/28.jpg';


const FamilyLawSection: React.FC = () => {
    return (
      <div className="family-law-section w-full md:w-800 h-auto md:h-800 relative border border-yellow-500">
  <img src={image25} alt="Family Law Attorney" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
  <div className="absolute inset-0 flex justify-center items-center text-white text-center z-10">
  <div className="max-w-screen-lg mx-auto px-4 md:px-8 lg:px-10">
  <div className="border border-yellow-500 p-6 md:p-8 lg:p-10">
    <div className="md:flex md:flex-wrap md:-mx-2">
      <div className="md:w-1/2">
        <div>
          <h3 className="text-4xl font-bold text-white mb-2 text-yellow-500">Why Choose Us</h3>
          <p className="text-base md:text-lg lg:text-xl text-white mb-4">
            At our law firm, we pride ourselves on having a dedicated team of experienced attorneys who are committed to providing you with exceptional legal services. Our attorneys have extensive experience in family law matters and are well-versed in handling various cases, including divorce, child custody, adoption, and more.
          </p>
          
        </div>
      </div>
      <div className="md:w-1/2 md:px-2">
        <div className="grid grid-cols-2 text-white">
          <RectangleBlock title="2000+" description="Client Consultations" />
          <RectangleBlock title="93%" description="Successful Cases" />
          <RectangleBlock title="40+" description="Professional Attorneys" />
          <RectangleBlock title="20mlns" description="Recovered Cost" />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>



    );
  };
  
  const RectangleBlock: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
      <div className="bg-black-300text-center py-6 hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out border br-3 border-white-500 mr-5 mb-5">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-white-700">{description}</p>
      </div>
    );
  };
  
  export default FamilyLawSection;