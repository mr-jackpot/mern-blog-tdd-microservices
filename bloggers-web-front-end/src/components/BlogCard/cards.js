import React from "react";
import './cards.css'

const BlogCard = (props) => {


    if (props.user !== null) {
    return (
        <div className="blog-container" data-cy="blog-container">
            <div className="container-header">
                <div className="header-user"> {props.user} </div>
                <div className="header-date"> {props.date} </div>
            </div>
            <div className="container-body">
                <div className="body-blog"> {props.blog} </div>
            </div>
        </div>
    )}
    
    return (<div className="blog-card-error">Error. Please check browser console.</div>) 
}

export default BlogCard;