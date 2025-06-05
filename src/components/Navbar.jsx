import { Link } from 'react-router-dom'
import { FiHome, FiUser } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { RiToolsFill, RiUserHeartLine } from 'react-icons/ri'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="vertical-navbar navbar-expand-lg">
            <div className="navbar-container container">
                <div className='nav-box'>
                    <ul className='navbar-nav ms-auto'>
                        <li className="nav-item">
                            <Link className='nav-link' to='/'><FiHome/>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/about'><FiUser/>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/projects'><AiOutlineFundProjectionScreen/>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/skills'><RiToolsFill/>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/contact'><HiOutlineEnvelope/>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar