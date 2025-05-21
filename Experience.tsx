import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Professional Experience</h2>
        
        {/* BlackRock Experience */}
        <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Java Full Stack Developer</h3>
              <p className="text-xl text-gray-600">BlackRock – New York, NY</p>
            </div>
            <p className="text-gray-600 font-medium">Jan 2024 – Present</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              At BlackRock, I've been instrumental in engineering high-performance backend services using Java 17, Spring Boot, and Micronaut, 
              specifically optimized for the Aladdin platform's real-time trading and risk analytics. My implementations have successfully reduced 
              transaction processing latency by 35%, significantly enhancing the platform's responsiveness for critical financial operations.
            </p>
            
            <p className="text-gray-700 mb-4">
              I've developed responsive and modular UI components with Angular 16, implementing advanced data visualization techniques that enable 
              portfolio managers to track market shifts and exposure in real-time. This visual approach to complex financial data has improved 
              decision-making speed and accuracy across trading teams.
            </p>
            
            <p className="text-gray-700 mb-4">
              My work on secure RESTful and GraphQL APIs for trade reconciliation, portfolio validation, and risk event notifications has created 
              robust systems capable of handling over 10,000 requests per minute with 99.99% uptime. These interfaces serve as critical communication 
              channels between various components of BlackRock's financial ecosystem.
            </p>
            
            <p className="text-gray-700 mb-4">
              I integrated Apache Flink for processing market data streams, enabling rapid trade decision-making with sub-second response windows. 
              This implementation supports complex event processing across multiple data sources, allowing for sophisticated pattern recognition in 
              financial market movements.
            </p>
            
            <p className="text-gray-700">
              <strong>Environment:</strong> Java 17, Spring Boot, Micronaut, Angular 16, AWS (ECS, Fargate, Secrets Manager), PostgreSQL, 
              Elasticsearch, Redis, Apache Flink, Docker, Terraform, OAuth2, Okta
            </p>
          </div>
        </div>
        
        {/* Humana Experience */}
        <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Java Full Stack Developer</h3>
              <p className="text-xl text-gray-600">Humana – Indianapolis, IN</p>
            </div>
            <p className="text-gray-600 font-medium">Oct 2022 – Nov 2023</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              At Humana, I architected and implemented Java 17 microservices using Spring Boot for the Humana Data Exchange (HDX) platform. 
              I applied event-driven architecture with Kafka for real-time healthcare data processing across integrated systems, creating a 
              seamless flow of critical patient and provider information throughout the organization.
            </p>
            
            <p className="text-gray-700 mb-4">
              I optimized Java 17 service performance by implementing advanced Hibernate (JPA) features including lazy loading, connection pooling, 
              and multi-level caching strategies. These optimizations reduced database load and improved response times by 45%, enhancing the 
              overall user experience for healthcare providers accessing the platform.
            </p>
            
            <p className="text-gray-700 mb-4">
              My work on responsive and interactive user interfaces using Angular 16 with RxJS and NgRx state management transformed complex design 
              mockups into intuitive enterprise-level experiences for the HDX platform. The resulting interfaces simplified complex healthcare 
              workflows and improved adoption rates among clinical staff.
            </p>
            
            <p className="text-gray-700">
              <strong>Environment:</strong> Java 17, Spring Boot, Angular 16, AWS (Lambda, S3, CloudWatch), Oracle, MongoDB, RESTful APIs, 
              Kafka, HIPAA/FHIR standards, Agile
            </p>
          </div>
        </div>
        
        {/* HSBC Experience */}
        <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Jr Java Full Stack Developer</h3>
              <p className="text-xl text-gray-600">HSBC – Hyderabad, IN</p>
            </div>
            <p className="text-gray-600 font-medium">May 2019 – July 2021</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              At HSBC, I developed responsive frontend interfaces using React.js and Redux, implementing reusable component libraries and state 
              management patterns for complex financial workflows. This approach reduced code duplication by 35% and established consistent user 
              experiences across multiple banking applications.
            </p>
            
            <p className="text-gray-700 mb-4">
              I designed and implemented Java 11 microservices for secure financial operations, ensuring smooth inter-service communication through 
              RESTful APIs and message queues while adhering to enterprise-level banking protocols. These services formed the backbone of several 
              critical banking operations, handling millions of transactions daily.
            </p>
            
            <p className="text-gray-700 mb-4">
              My implementation of real-time communication services with WebSocket, RabbitMQ, and Kafka enabled instant updates across the banking 
              platform and improved transaction processing speed by 40%. This real-time capability enhanced customer experience by providing immediate 
              feedback on account activities and financial operations.
            </p>
            
            <p className="text-gray-700">
              <strong>Environment:</strong> Java 11, Spring Boot, React 16, Redux, RabbitMQ, Kafka, RESTful APIs, SQL Server, WebSocket, Agile
            </p>
          </div>
        </div>
        
        {/* PayPal Experience */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Java Intern</h3>
              <p className="text-xl text-gray-600">PayPal – India</p>
            </div>
            <p className="text-gray-600 font-medium">Oct 2018 – Mar 2019</p>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              During my internship at PayPal, I designed and developed key modules for an enterprise resource planning (ERP) system using Java 8 
              and Spring Framework. I implemented inventory management and sales tracking functionalities that improved operational efficiency by 25%, 
              providing business units with better visibility into resource allocation and utilization.
            </p>
            
            <p className="text-gray-700 mb-4">
              I built RESTful APIs following industry best practices for seamless data exchange between system components, enhancing integration 
              efficiency and reducing system coupling. These APIs became the standard interface pattern for new development within the organization, 
              promoting consistency across teams.
            </p>
            
            <p className="text-gray-700">
              <strong>Environment:</strong> Java 8, Spring Framework, MySQL, RESTful APIs, Agile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
