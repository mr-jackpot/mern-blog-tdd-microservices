import React from "react";
import './cards.css'

const BlogCard = (props) => {

    return (
        <div className="blog-container">
            <div className="container-header">
                <div className="header-user"> Name: Adam Heeps </div>
                <div className="header-date"> Date: 21-12-2021 </div>
            </div>
            <div className="container-body">
                <div className="body-blog"> This is my blog. </div>
            </div>
        </div>
    )}

export default BlogCard;