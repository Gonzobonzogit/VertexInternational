import React, { useState } from 'react';
import '../css/navbar.css';

function NavBar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleProfileAction = (action) => {
        setIsProfileOpen(false); // Close menu after click
        if (action === "profile") alert("Navigate to user profile...");
        if (action === "accounts") alert("Visiting My Accounts...");
        if (action === "contact") alert("Visiting Vertex's contact page...");
        if (action === "signout") alert("Returning to sign in, Goodbye...");
    };

    return (
        <header className="topBar">
            {/* Left: Branding */}
            <div className="navBrand">
                <span className="brandText">Vertex <span className="brandHighlight">International</span></span>
            </div>

            {/* Center: Navigation Links */}
            <nav className="navigation">
                <ul className="siteNav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#accounts">Accounts</a></li>
                    <li><a href="#transfer">Transfer</a></li>
                    <li><a href="#wallets">Wallets</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>

            {/* Right: User Profile Section */}
            <div className="userSection">
                <div className="userGreeting">
                    <span>Welcome back, <strong>King Gonzo</strong></span>
                </div>
                
                <div className="profileDropdown">
                    <div 
                        className="profileTrigger" 
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <img 
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gonzo" 
                            alt="User Profile" 
                            className="profilePic" 
                        />
                        <span className="dropdownArrow">{isProfileOpen ? '▲' : '▼'}</span>
                    </div>

                    {isProfileOpen && (
                        <ul className="dropdownMenu">
                            <li onClick={() => handleProfileAction('profile')}>My Profile</li>
                            <li onClick={() => handleProfileAction('accounts')}>My Accounts</li>
                            <li onClick={() => handleProfileAction('contact')}>Contact Us</li>
                            <hr className="dropdownDivider" />
                            <li className="signOut" onClick={() => handleProfileAction('signout')}>Sign Out</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}

export default NavBar;

