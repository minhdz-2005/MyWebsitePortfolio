import { GiBookAura } from 'react-icons/gi';
import { LiaToolsSolid } from 'react-icons/lia';
import { MdWorkHistory } from 'react-icons/md';
import { GoGoal } from 'react-icons/go';
import { GiBrain } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const fadeVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3, duration: 0.6 },
        }),
    };

    const sections = [
        {
            key: 'intro',
            content: (
                <>
                    <h1 className="text-white text-center my-4">
                        <FaUserEdit /> ABOUT ME
                    </h1>

                    <div className="basic-introduction text-white">
                        <h2><GiBookAura /> Introduction</h2>
                        <p className="fs-5">
                            I'm <strong>Nguyen Duc Minh</strong>, 3rd-year student majoring in Information Technology at Da Nang University of Science and Technology.
                        </p>

                        <div className="info-list">
                            <div><strong>Age:</strong> 21</div>
                            <div><strong>Career Goal:</strong> Full Stack Developer</div>
                        </div>
                    </div>
                </>
            ),
        },
        {
            key: 'tech',
            content: (
                <div className="tech-stack text-white">
                    <h2><LiaToolsSolid /> Tech Stack</h2>
                    <div className="info-list">
                        <div><strong>Programming Language:</strong> <span>JavaScript, C#, Python</span></div>
                        <div><strong>Frontend:</strong> <span>React.js, HTML/CSS, BoostrapCSS</span></div>
                        <div><strong>Backend:</strong> <span>Express.js, ASP.NET Core</span></div>
                        <div><strong>Database:</strong> <span>MongoDB, SQL Server</span></div>
                        <div><strong>ORM:</strong> <span>Entity Framework Core</span></div>
                        <div><strong>Tools:</strong> <span>Figma, Git</span></div>
                    </div>
                </div>
            ),
        },
        {
            key: 'experience',
            content: (
                <div className="experience">
                    <h2><MdWorkHistory /> Experience</h2>
                    <p className="fs-5">
                        I currently have no practical work experience, but have completed some personal projects such as a portfolio website, an AI disease prediction system and travel tour booking system.
                    </p>
                    <Link to="/projects" className="btn btn-outline-info">View my projects</Link>
                </div>
            ),
        },
        {
            key: 'goal',
            content: (
                <div className="career-goal">
                  <h2><GoGoal /> Orientation</h2>
                  <p className="fs-5">
                      I am currently focusing on developing my Full-stack Web skills. My goal for the next year is to build practical projects that will allow me to apply for internships as a Frontend or Backend developer.
                  </p>
                </div>
            ),
        },
        {
            key: 'mindset',
            content: (
                <div className="mindset text-white">
                    <h2><GiBrain /> Mindset</h2>
                    <div className="info-list">
                        <div>
                            <strong>Growth Mindset:</strong>
                            <span>I believe that every mistake is an opportunity to grow. I aim for perfection and progress.</span>
                        </div>
                        <div>           
                            <strong>Work Philosophy:</strong>
                            <span>Clean code is not just a practice - it's a promise to my future self and to the team.</span>
                        </div>
                        <div>
                            <strong>Lifelong Learning:</strong>
                            <span>Technology evolves every day. So should I.</span>
                        </div>
                        <div>
                            <strong>Product Mindset:</strong>
                            <span>I don't just build features. I aim to create experiences that solve real problems.</span>
                        </div>
                        <div>
                            <strong>Collaboration Philosophy:</strong>
                            <span>Great software isn't built alone - it's built through collaboration, curiosity, and clear communication.</span>
                        </div>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="about-container">
            {sections.map((section, i) => (
                <motion.div
                    key={section.key}
                    custom={i}
                    variants={fadeVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {section.content}
                </motion.div>
            ))}
        </div>
    );
}

export default About;
