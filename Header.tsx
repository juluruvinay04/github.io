import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Vinay Juluru</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Java Full-Stack Developer</h2>
        <div className="flex flex-wrap items-center gap-4 text-lg">
          <a href="tel:9378867652" className="flex items-center hover:text-blue-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            9378867652
          </a>
          <a href="mailto:vinayjuluru4@gmail.com" className="flex items-center hover:text-blue-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            vinayjuluru4@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
