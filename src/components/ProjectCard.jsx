import React from "react"
import './ProjectCard.css'

const ProjectCard = ({ title, description, features, techStack, role, image, githubLink }) => {
    return (
        <div className="project-card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body pt-3 pe-4">
                <h5 className="card-title text-white fw-bold mb-2">{title}</h5>
                <p className="card-text text-white">{description}</p>

                <ul className="list-group list-group-flush mb-3">
                    {features.map((feature, index) => (
                        <li className="list-group-item bg-transparent text-start text-white ms-5" key={index}>{feature}</li>
                    ))}
                </ul>

                <p className="text-white"><strong>Tech Stack:</strong> {techStack}</p>
                <p className="text-white"><strong>My Role:</strong> {role}</p>

                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary text-white mb-4">
                    🔗 GitHub Repository
                </a>
            </div>
        </div>
    )
}

export default ProjectCard