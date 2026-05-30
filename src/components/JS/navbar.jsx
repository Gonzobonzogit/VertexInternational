import React, { useState } from 'react';
import '../css/navbar.css';
import  companyLogo from '../../imgs/vertex_international_logo.svg';

const NavBar = ({ setPage }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileAction = (action) => {
        setIsProfileOpen(false); // Close menu after click
        if (action === "profile") alert("Navigate to user profile...");
        if (action === "accounts") alert("Visiting My Accounts...");
        if (action === "contact") alert("Visiting Vertex's contact page...");
        if (action === "signout") alert("Returning to sign in, Goodbye...");
    };

    return (
        <header className="top-bar">
            {/* Left: Branding */}
            <div className="nav-brand">
                <span className="logo">
                    <img src={companyLogo} alt="company logo" />
                </span>
                <span className="brand-text">
                    Vertex 
                    <span className="brand-hilite">
                        International
                    </span>
                </span>
            </div>

            {/* Center: Navigation Links */}
            <nav className="nav">
                <ul className="nav-List">
                    <li><button className="nav-Link" onClick={() => setPage('accounts')}>Accounts</button></li>
                    <li><button className="nav-Link" onClick={() => setPage('transfers')}>Transfers</button></li>
                    <li><button className="nav-Link" onClick={() => alert('Wallets coming soon!')}>Wallets</button></li>
                    <li><button className="nav-Link" onClick={() => alert("Settings are in the works")}>Settings</button></li>
                </ul>
            </nav>

            {/* Right: User Profile Section */}
            <div className="user-section">
                <div className="user-greeting">
                    <span>Welcome back, <strong>King Gonzo</strong></span>
                </div>
                
                <div className="profile-drop">
                    <div 
                        className="profile-trigger" 
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gonzo" 
                            alt="User Profile" 
                            className="pfp" 
                        />
                        <span className="Arrow">{isProfileOpen ? '▲' : '▼'}</span>
                    </div>

                    {isProfileOpen && (
                        <ul className="drop-menu">
                            <li onClick={() => handleProfileAction('profile')}>My Profile</li>
                            <li onClick={() => handleProfileAction('accounts')}>My Accounts</li>
                            <li onClick={() => handleProfileAction('contact')}>Contact Us</li>
                            <hr className="drop-Div" />
                            <li className="sign-out" onClick={() => handleProfileAction('signout')}>Sign Out</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default NavBar;

