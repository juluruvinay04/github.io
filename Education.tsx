import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-10 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">University of Dayton</h3>
                <p className="text-gray-600">Dayton, Ohio, USA</p>
                <p className="font-medium">Master's - Computer Science</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-700 font-medium">CGPA: 3.45</p>
                <p className="text-gray-600">Aug. 2021 – May 2023</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Sreenidhi Institute of Science and Technology</h3>
                <p className="text-gray-600">Hyderabad, India</p>
                <p className="font-medium">Bachelor's - Electronics and Communication Engineering</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-700 font-medium">CGPA: 6.5</p>
                <p className="text-gray-600">Aug 2015 - May 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
