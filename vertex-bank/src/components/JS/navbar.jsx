//This willbe the entire top bar section from the nave elements to the profile options

import React from 'react';

//Creating a function to handle our drop box options
function NavBar(){
    const handleProfileControls = (event =>  {
        let value = undefined;
        value : event.target.value;
        if(value === "1") alert("Navigate to user profile...");
        if(value === "2") alert("Visiting Vertex's contact page...");
        if(value === "3") alert("Returning to sign in, Goodbye...");
    });


//Returning the actual html ui elements
    return (
        <div className="topBar">
            <div className="navContainer">
                <nav className="navigation">
                    <ul className="siteNav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Accounts</a></li>
                        <li><a href="#">Transfer</a></li>
                        <li><a href="#">Wallets</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </div>
            <div className="profileOps">
                <select className="profileControls" onChange={handleProfileControls}>
                    <option value="1">Profile</option>
                    <option value="2">Contact Us</option>
                    <option value="3">Sign Out</option>
                </select>
            </div>
        </div>
     );
}


export default NavBar;
