const projectList = [
    {
        title: "Portfolio Website",
        description: "Personal website built with React showcasing my work, skills, and contact information.",
        link: "https://raghvendramittal.netlify.app/",
        image: "/images/portfolio-project-img.png"
    },
    {
        title: "E-commerce Platform",
        description: "Developed with Django, featuring user auth, product filters, and cart functionality.",
        link: "https://ecommerce-ib69.onrender.com",
        image: "/images/ecommerce-project-img.png"
    },
    {
        title: "Your Thoughts",
        description: "A full-stack blog platform built with Django, enabling users to read and publish blog posts. Includes secure login/logout authentication and admin controls for managing and moderating content, including post deletion.",
        link: "https://codermittal.pythonanywhere.com/",
        image: "/images/blog-project-img.png"
    },
];

function Projects() {

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
