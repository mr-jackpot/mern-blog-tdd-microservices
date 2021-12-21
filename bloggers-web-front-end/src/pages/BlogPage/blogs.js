// blogs page

import React from "react";
import './blogs.css'


const BlogPage = () => {

    return (
        <div> 
            <div className="Header" data-cy="blog-page-header">
                <p1>This is the blogpage header</p1>
            </div>
            <div className="blog-container" data-cy="blog-page-body">
                <p1>This is the blogpage body</p1>
            </div>
        </div>
    )
}

export default BlogPage;