import React from 'react';

const Summary: React.FC = () => {
  return (
    <section id="summary" className="py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Professional Summary</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Accomplished Full-Stack Developer with over 5 years of experience architecting and deploying enterprise-grade web applications and microservices. 
            Specialized in Angular, Java, and RESTful API development, with proven expertise in cloud computing using AWS for serverless solutions and 
            infrastructure optimization. Demonstrated success in delivering high-performance, scalable applications in Agile environments with a focus on 
            code quality, security compliance, and continuous integration/deployment practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
