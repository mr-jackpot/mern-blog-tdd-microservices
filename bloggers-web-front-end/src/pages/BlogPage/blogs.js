// blogs page

import React from "react";
import './blogs.css'
import BlogCard from "../../components/BlogCard/cards";


const BlogPage = () => {

    return (
        <div> 
            <div className="Header" data-cy="blog-page-header">
                <p1>This is the blogpage header</p1>
            </div>
            <div className="blog-page-body" data-cy="blog-page-body">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogPage;