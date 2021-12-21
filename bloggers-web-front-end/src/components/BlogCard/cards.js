import React from "react";
import './cards.css'

const BlogCard = (props) => {


    if (!props.err) {
    return (
        <div className="blog-container">
            <div className="container-header">
                <div className="header-user"> User{props.user} </div>
                <div className="header-date"> Date{props.date} </div>
            </div>
            <div className="container-body">
                <div className="body-blog"> Blog{props.blog} </div>
            </div>
        </div>
    )}
    
    return (<div className="blog-card-error">{props.err}</div>) 
}

export default BlogCard;