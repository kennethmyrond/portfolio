import React from "react";


const Experience = () => (
    <section id="experience" className="bg-light py-5">
        <div className="container">
            <h2 className="text-center mb-4">Experience</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Freelance Software Developer</h5>
                                <p className="card-text">Integrated Chemists of the Philippines (2025)</p>
                                <ul>
                                    <li>Developed a Membership Management System</li>
                                    <li>Handled client communication, testing, and documentation</li>
                                    <li>Tools: HTML, CSS, Bootstrap, JavaScript, Django</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Software Developer Intern</h5>
                                <p className="card-text">De La Salle University IT Department (2025)</p>
                                <ul>
                                    <li>Built and deployed an Internship Management System</li>
                                    <li>Streamlined document submission & processing</li>
                                    <li>Tools: Angular, PostgreSQL, GitHub, Proxmox</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Capstone Leader</h5>
                                <p className="card-text">DLSU IT Capstone Project (2024-2025)</p>
                                <ul>
                                    <li>Led team developing a laboratory management system</li>
                                    <li>Oversaw milestones, testing, and deployment</li>
                                    <li>Tools: Django, MySQL, Proxmox, Apache</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
);


export default Experience;