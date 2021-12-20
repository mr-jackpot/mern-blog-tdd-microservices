// site landing page

import React from "react";
import "./home.css"


const HomePage = () => {

    return (
        <div> 
            <div className="Header" data-cy="home-page-header">
                <p1>This is the homepage header</p1>
            </div>
            <div className="Body" data-cy="home-page-body">
                <button data-cy="home-page-blog-button" className="selector-button" id="blog-button">View Blogs</button>
                <button data-cy="home-page-user-button" className="selector-button" id="user-button">View Users</button>
            </div>
        </div>
    )
}

export default HomePage;