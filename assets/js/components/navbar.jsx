//This willbe the entire top bar section from the nave elements to the profile options
import React from 'react';
import '../../css/style.css';


//Creating a function to handle our drop box options
function NavBar(){
    const handleProfileControls = (event) =>  {
        const value = event.target.value;
        if(value === "1") alert("Navigate to user profile...");
        if(value === "2") alert("Visiting Vertex's contact page...");
        if(value === "3") alert("Returning to sign in, Goodbye...");
    };


//Returning the actual html ui elements
    return (
    <header>
        <div className="topBar">
            {/* Left part of bar "branding" */}
            <div className="brandLogo">
                <span className="brandName">Vertex</span>
                <span className="worldWide">International</span>
                <span className="estblishment">Banking</span>
            </div>

            {/*Cneter section of the bar*/}
            <div className="navContainer">

                <nav className="navigation" aria-label= "Main navigation">

                    <ul className="siteNav">
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">Accounts</a></li>
                        <li><a href="#">Transfer</a></li>
                        <li><a href="#">Wallets</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </nav>
            </div>


{/* Right section of the navbar aka drop down menu */}

            <div className="profileOps">
                <select
                    className="profileControls"
                    onChange={handleProfileControls}
                    defaultValue=""
                >
                    <option value="" disabled>King Gonzo</option>

                    <option value="1">Profile</option>

                    <option value="2">Contact Us</option>

                    <option value="3">Sign Out</option>
                </select>
            </div>
        </div>
        </header>
     );
}


export default NavBar;
