// blogs page

import React, { useEffect } from "react";
import axios from 'axios'
import './blogs.css'
import BlogCard from "../../components/BlogCard/cards";

const BlogPage = () => {

    const [cardData, setCardData] = React.useState([])
    
    const load = (err) => {
        axios
          .get(`http://localhost:3005/api/blogs`)
          .then((res) => {
            const data = res.data
            const objArr = []
    
            if (res.data.error != null) {
                return setCardData(err);
            }

            data.map((arr) => {
              objArr.push({
                user: arr.user,
                date: arr.date,
                blog: arr.blog
              })
            })
            return setCardData(objArr)
          });   
      };

    const displayBlogs = (data) => {
       
        var render = []
        data.map((x) => {
          return render.push(<BlogCard 
            user={x.user} 
            date={x.date} 
            blog={x.blog} 
            err={x.err}/>) 
        })
    
        return render;
      }

    useEffect(() => {
      load();
    })
    
    return (  
        <div> 
            <div className="Header" data-cy="blog-page-header">
                <p1>This is the blogpage header</p1>
            </div>
            <div className="blog-page-body" data-cy="blog-page-body">
                {displayBlogs(cardData)}
            </div>
        </div>
    )
}

export default BlogPage;