import { IoChatbubbleEllipses } from 'react-icons/io5'
import { FaFacebook, FaGithub, FaSlack } from 'react-icons/fa'
import './Contact.css'
import { GrContactInfo } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className="contact-section py-5 text-center text-light">
            <h1 className="title fw-bold mb-5 text-white"><GrContactInfo/> Contact Me</h1>
            <p className="mb-4 mx-3">I'm open to work or collaboration opportunities. Let's connect and create something great together!</p>

            <ul className="list-unstyled mx-5 text-start">
                <li className='mb-2'><strong>Email:</strong>ducminh.k23.dut.udn@gmail.com</li>
                <li className='mb-2'><strong>Phone:</strong>0388 108 368</li>
                <li className='mb-2'><strong>Location:</strong>Da Nang City, Vietnam</li>
            </ul>

            <div className="social-icons d-flex justify-content-center flex-wrap gap-3">
                <a href="https://github.com/minhdz-2005" target="_blank" rel="noreferrer" aria-label="GitHub Profile"><FaGithub size={30} /></a>
                <a href="https://www.facebook.com/minh.phung.20649/" target="_blank" rel="noreferrer" aria-label="Facebook Profile"><FaFacebook size={30} /></a>
                <a href="https://sun-xseeds.slack.com/team/U05S72X53FZ" target="_blank" rel="noreferrer" aria-label="Slack"><FaSlack size={30} /></a>
                <a href="https://www.chatwork.com/21022005" target="_blank" rel="noreferrer" aria-label="Chatwork"><IoChatbubbleEllipses size={30} /></a>
            </div>
        </div>
    )
}

export default Contact