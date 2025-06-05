import { Link } from 'react-router-dom'
import './Home.css'
import { useEffect, useState } from 'react'

const Home = () => {
    const [text, setText] = useState('');
    const message = "I  am a student majoring in Information Technology, with a strong passion for web programming. I not only enjoy building and developing online applications but also have a constant desire to explore the latest technologies in this field."

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(prev => prev + message.charAt(index))
            index++
            if(index >= message.length) clearInterval(timer)
        }, 10)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="home-container d-flex align-items-center">
            <div className="row">
                <div className="img-box col-md-5 text-center">
                    <img src="../images/avatar.jpeg" alt="Your Avatar" className="img-fluid circle avatar-img" />
                </div>

                <div className="info-box col-md-7 d-flex flex-column justify-content-center">
                    <h1>Hello!</h1>
                    <h2>I'm <strong>Nguyen Duc Minh</strong></h2>
                    <p className='typing'>
                        {text}
                    </p>

                    <div className="link-box">
                        <Link to="/projects" className="btn btn-primary">View my projects</Link>
                        <Link to="/about" className="btn btn-outline-secondary text-light">About me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home