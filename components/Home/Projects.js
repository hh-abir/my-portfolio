// src/components/ProjectSection.js
import React from 'react';

const projects = [
    {
        title: 'Project 1',
        description: 'Description of Project 1.',
        imageUrl: 'https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?w=2000',
        githubUrl: 'https://github.com/yourusername/project1',
        liveDemoUrl: 'https://project1.demo.com',
    }, {
        title: 'Project 2',
        description: 'Description of Project 1.',
        imageUrl: 'https://img.freepik.com/premium-psd/white-theme-instagram-post-mockup-template-editable-psd_534308-5970.jpg',
        githubUrl: 'https://github.com/yourusername/project1',
        liveDemoUrl: 'https://project1.demo.com',
    },
    {
        title: 'Project 3',
        description: 'Description of Project 1.',
        imageUrl: 'https://assets.materialup.com/uploads/7a2f34f9-1de8-4047-8fb8-b12437eaec37/preview.png',
        githubUrl: 'https://github.com/yourusername/project1',
        liveDemoUrl: 'https://project1.demo.com',
    },
    // Add more project objects here...
];

const Project = () => {
    return (

        <div className='bg-black'>
            <h2 className="text-2xl font-bold pl-6 lg:pl-12">Projects</h2>
            <div className="flex flex-col lg:flex-row justify-between p-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className=" lg:p-6 rounded shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <div className="mt-5   card lg:w-96 w-auto bg-base-100 shadow-xl">
                            <figure><img src={project.imageUrl} alt="Shoes" className=' lg:h-72 w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {project.title}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{project.description}</p>
                                <div className="flex justify-between mt-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-xl transition duration-300"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-xl transition duration-300"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center py-4 ">
                <a to="/all-projects" >
                    <button
                        className="rounded-xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  transition duration-300"
                    >
                        Show More
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Project;
