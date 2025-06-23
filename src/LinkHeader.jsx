import React, { useState } from 'react';

const LinkHeader = () => {
    const [showSubLinks, setShowSubLinks] = useState(false);
    const offSet = showSubLinks ? 200 : 145;
    const offSet2 = showSubLinks ? 400 : 326;

    return (
        <>
            <nav className="linkHeader">
                {/* <img className="logo" src="../bbcLogo.jpg" alt="#" /> */}
                <div className="ppSec">
                    <img src="../profilePic.jpg" alt="../profilePic.jpg" className="profileImg" />
                    <h2>asdasdas</h2>
                </div>
                {/* <i className="fa fa-bell"></i> */}

                <div className="linksHeading">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Sport</a></li>
                        <li><a href="#">Weather</a></li>
                        <li><a href="#">Science</a></li>
                        <li className="moreOptions" onClick={() => setShowSubLinks(true)}><a href='#'>More</a></li>
                    </ul>
                </div>

                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search News"/>
                </div>
            </nav>

            {showSubLinks && (
                <nav className="subLinkHeading">
                    <div className="subLinksHeading">
                        <ul>
                        <li><a href="#">United Kindom</a></li>
                        <li><a href="#">The Netherlands</a></li>
                        <li><a href="#">Bangladesh</a></li>
                        <li><a href="#">Other</a></li>
                        </ul>
                    </div>
                    <i 
                        className="fa fa-close"
                        onClick={() => setShowSubLinks(false)}
                    ></i>
                </nav>
            )}
        </>
    );
};

export default LinkHeader
