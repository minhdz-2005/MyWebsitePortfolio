import './Projects.css'
import ProjectCard from '../components/ProjectCard'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FaProjectDiagram } from 'react-icons/fa'

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
        }
    })
}

const Projects = () => {
    const projects = [
        {
            title: "CoffeeShop Management",
            description: "PBL3: Application programming project. MAUI application helps to manage coffee shops effectively with product, order, staff and shift management functions.",
            features: [
                "CRUD product, staff, order,...",
                "Apply voucher to order",
                "User authorization management (Administrator, Employee)",
                "Beautiful interface with MAUI"
            ],
            techStack: "C#, MAUI, Entity Framework Core, SQL Server",
            role: "Data display, logic processing, database connection, source code management",
            image: "/images/CoffeeShop.png",
            githubLink: "https://github.com/minhdz-2005/PBL3MAUIApp"
        },

        {
            title: "AI Disease Predictor",
            description: "A website that uses artificial intelligence to predict diseases based on user-entered symptoms. In addition, the system also provides information and treatment methods for each disease.",
            features: [
                "Predicting disease based on input symptoms",
                "Provide information and treatment for each disease",
                "Statistical system of disease prediction",
                "Multilingual support (Vietnamese, Japanese, English)"
            ],
            techStack: "React, Python, FastAPI, MongoDB",
            role: "Building frontend, backend AI, language processing, database connectivity",
            image: "/images/DiseasePredictor.png",
            githubLink: "https://github.com/minhdz-2005/DiseasePredictor"
        }
    ];

    return (
        <div className="proj-container py-5">
            <h1 className="text-white fw-bold"><FaProjectDiagram/> My Projects</h1>
            <span className='text-white'>Below are some of the recent projects I've worked on, highlighting my skills and expertise.</span>

            <div className="row mt-4">
                {projects.map((project, index) => (
                <motion.div
                    className="col-md-6 mb-3"
                    key={project.title}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                >
                    <ProjectCard {...project} />
                </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects