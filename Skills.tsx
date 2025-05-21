import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: "Java (8/11/17), JavaScript, TypeScript, SQL, Python"
    },
    {
      title: "Front-End Development",
      skills: "Angular 16, React.js, Redux, HTML5, CSS3, Bootstrap, Material UI"
    },
    {
      title: "Back-End Development",
      skills: "Spring Boot, Spring MVC, Spring Security, Hibernate, JPA, Node.js, Micronaut"
    },
    {
      title: "Databases & Caching",
      skills: "MongoDB, MySQL, PostgreSQL, Oracle, SQL Server, Redis, Elasticsearch"
    },
    {
      title: "Messaging & Integration",
      skills: "RESTful APIs, GraphQL, Kafka, RabbitMQ, WebSockets, Apache Flink"
    },
    {
      title: "Cloud & DevOps",
      skills: "AWS (Lambda, EC2, S3, RDS, ECS, Fargate), Docker, Kubernetes, Jenkins, GitHub Actions, Terraform"
    },
    {
      title: "Testing & Monitoring",
      skills: "JUnit, Mockito, Jasmine, Karma, Splunk, Prometheus, Grafana"
    },
    {
      title: "Security & Compliance",
      skills: "OAuth2, JWT, HIPAA, GDPR, PCI-DSS, SOX, FINRA"
    }
  ];

  return (
    <section id="skills" className="py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-700">{category.skills}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            With extensive experience across multiple technology stacks, I bring a comprehensive skill set to any development team. My expertise spans from front-end frameworks like Angular and React to back-end technologies such as Spring Boot and Micronaut. I excel in database management across SQL and NoSQL platforms, and have implemented robust messaging systems using Kafka and RabbitMQ. My cloud computing knowledge, particularly with AWS services, enables me to architect scalable, resilient applications with modern DevOps practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
