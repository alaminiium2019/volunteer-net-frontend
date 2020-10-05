import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header_home container">

            <nav>
                <img src={logo} className="logo" alt="logo"></img>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/register" className="btn-primary pr-4 pt-2 pb-2 m-3" style={{ borderRadius: '5px', color: 'white' }}>Register</Link>
                    </li>
                    <li>
                        <Link to="/admin" className="btn-secondary pr-4 pt-2 pb-2 m-3" style={{ borderRadius: '5px', color: 'white' }}>Admin</Link>
                    </li>
                    <li className="pl-3">
                        {loggedInUser.name}
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;