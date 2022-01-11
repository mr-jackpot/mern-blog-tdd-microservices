// site landing page

import React from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./home.css"



const HomePage = () => {

    const navigate = useNavigate();

    const routeChange = () =>{ 
        let path = `blog`; 
        navigate(path);
      }

    return (
        <div> 
            <div className="Header" data-cy="home-page-header">
                <p1>This is the homepage header</p1>
            </div>
            <div className="Body" data-cy="home-page-body">
                <Button variant="btn btn-success" data-cy="home-page-blog-button" className="selector-button" 
                    id="blog-button" onClick={routeChange}>View latest blog posts</Button>
                    
                <Button variant="btn btn-success" data-cy="home-page-user-button" className="selector-button" 
                    id="user-button">Search all users</Button>
            </div>
            <div id="login-container">
                <a href="http://localhost:3015/login"><button>Login</button></a>
                <a href="http://localhost:3015/logout"><button>Logout</button></a>
            </div>
        </div>
    )
}

export default HomePage;