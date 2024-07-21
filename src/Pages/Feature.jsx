
import React from 'react';
import { FaChalkboardTeacher, FaLaptopCode, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaChalkboardTeacher size={24} className="text-yellow-500" />,
    title: "Expedite Learning",
    description: "Adopting fast learning techniques by real-world experts",
  },
  {
    icon: <FaLaptopCode size={24} className="text-yellow-500" />,
    title: "Open-source Platform",
    description: "The world's leading open-source platform that helps your career",
  },
  {
    icon: <FaBolt size={24} className="text-yellow-500" />,
    title: "Maximum Efficiency",
    description: "Learning from the course has the potential to achieve maximum efficiency",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-around items-start">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer">
              <div className="bg-[#002147] last:text-white shadow-lg rounded-lg p-6 h-full hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
