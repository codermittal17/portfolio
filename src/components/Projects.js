function Projects() {
    const projectList = [
        {
            title: "Portfolio Website",
            description: "Personal website built with React showcasing my work, skills, and contact information.",
            link: "#",
            image: "your-portfolio-image-url.jpg"
        },
        {
            title: "E-commerce Platform",
            description: "Developed with Django and React, featuring user auth, product filters, and cart functionality.",
            link: "#",
            image: "your-ecommerce-image-url.jpg"
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="projects-section">
            <h3 className="section-title">PROJECTS</h3>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
