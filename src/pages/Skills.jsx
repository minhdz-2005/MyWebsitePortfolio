import './Skills.css'
import { FaReact, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaCss3, FaJs, FaNodeJs, FaFigma, FaTools } from 'react-icons/fa'
import { SiMongodb, SiFastapi, SiPostgresql, SiFramework } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { BiLogoVisualStudio } from 'react-icons/bi'
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { PiFileCSharp } from 'react-icons/pi'
import { LuBrainCircuit } from 'react-icons/lu'

const skills = {
    frontend: [
        { name: 'React.js', icon: <FaReact />, level: 40 },
        { name: 'HTML', icon: <FaHtml5 />, level: 50 },
        { name: 'CSS', icon: <FaCss3Alt />, level: 40 },
        { name: 'Bootstrap CSS', icon: <FaCss3 />, level: 30 }
    ],
    backend: [
        { name: 'Express.js', icon: <FaNodeJs />, level: 30 },
        { name: 'ASP.Net Core', icon: <PiFileCSharp />, level: 50 }
    ],
    API: [
        { name: 'FastAPI', icon: <SiFastapi />, level: 30 },
        { name: 'C# API', icon: <TbBrandCSharp />, level: 40 }
    ],
    programmingLanguages: [
        { name: 'C#', icon: <TbBrandCSharp />, level: 60 },
        { name: 'Python', icon: <FaPython />, level: 30 },
        { name: 'Javascript', icon: <FaJs />, level: 30 }
    ],
    database: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 30 },
        { name: 'SQL Server', icon: <DiMsqlServer />, level: 50 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 30 }
    ],
    otherTools: [
        { name: 'Git', icon: <FaGitAlt />, level: 50 },
        { name: 'Figma', icon: <FaFigma />, level: 40 },
        { name: 'Visual Studio Code', icon: <BiLogoVisualStudio />, level: 70 },
        { name: 'Visual Studio', icon: <DiVisualstudio />, level: 60 },
        { name: 'Entity Framework Core', icon: <SiFramework />, level: 70 },
        { name: 'AI Integration', icon: <LuBrainCircuit />, level: 80 },
    ]
}

const Skills = () => {
    return (
        <div className="skills-container py-5">
            <h1 className="text-white fw-bold mb-5"><FaTools/> My Skills</h1>

            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-5">
                    <h3 className="text-info fw-bold text-capitalize mb-4">{category}</h3>
                    <div className="row">
                        {skillList.map((skill, index) => (
                        <motion.div
                            className="col-md-4 mb-4"
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="skill-card p-3 text-center shadow rounded-3">
                            <div className="skill-icon mb-2">{skill.icon}</div>
                            <h5 className="text-white">{skill.name}</h5>
                            <div className="progress mt-2">
                                <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${skill.level}%` }}
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                >
                                {skill.level}%
                                </div>
                            </div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Skills
