import React from 'react';

const Portfolio = () => {
  const educationData = [
    // Education data...
    {
      id: 1,
      institution: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      year: '2016 - 2020',
    },
    {
      id: 2,
      institution: 'Online Course Platform',
      degree: 'Advanced Web Development Certification',
      year: '2021',
    },
    {
      id: 3,
      institution: 'Online Course Platform',
      degree: 'Advanced Web Development Certification',
      year: '2021',
    },
  ];

  const experienceData = [
    {
      id: 1,
      company: 'Company Name',
      role: 'Frontend Developer',
      year: '2021 - Present',
    },
    {
      id: 2,
      company: 'Another Company',
      role: 'UI/UX Designer',
      year: '2019 - 2021',
    },
    {
      id: 3,
      company: 'Another Company',
      role: 'UI/UX Designer',
      year: '2019 - 2021',
    },
  ];

  return (
    <div className='flex flex-col md:flex-row lg:px-5' >
      <div className="bg-black md:w-2/4">
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-white mb-8">Education</h2>
          <div className="flex flex-col">
            {educationData.map(item => (
              <div key={item.id} className="w-full lg:w-auto mt-5 bg-blue-50 p-6 rounded-3xl shadow-md text-gray-800">
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="mb-1">{item.institution}</p>
                <p>{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black md:w-2/4">
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold text-white mb-8">Experience</h2>
          <div className="flex flex-col">
            {experienceData.map(item => (
              <div key={item.id} className=" mt-5 bg-yellow-50 p-6 rounded-3xl shadow-md text-gray-800">
                <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                <p className="mb-1">{item.company}</p>
                <p>{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
