import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-3 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-xl font-bold">VJ</div>
          <div className="hidden md:flex space-x-6">
            <a href="#summary" className="hover:text-blue-300 transition-colors">Summary</a>
            <a href="#skills" className="hover:text-blue-300 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-300 transition-colors">Education</a>
            <a href="#experience" className="hover:text-blue-300 transition-colors">Experience</a>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
