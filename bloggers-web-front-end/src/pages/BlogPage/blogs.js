// blogs page

import React, { useEffect } from "react";
import axios from 'axios'
import './blogs.css'
import '../../components/SubmitBlog/submit'
import BlogCard from "../../components/BlogCard/cards";
import SubmitBlog from "../../components/SubmitBlog/submit";

const BlogPage = () => {   

    const [cardData, setCardData] = React.useState([])
    const [auth, setAuth] = React.useState(false)

    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    const load = (err) => {
        axios
          .get(`http://localhost:3005/api/blogs`)
          .then((res) => {
            const data = res.data
            const objArr = []

            data.map((arr) => {
              objArr.push({
                user: arr.user,
                date: arr.date,
                blog: arr.blog,
                id: arr._id
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
            id={x.id} 
            err={x.error}/>) 
        })
    
        return render;
      }

    useEffect(() => {
      load();
    })
    
    // Adding this axios.get call to the auth API will ensure that only 
    // authorized users can see the page.
    axios.get('http://localhost:3015/secure', config)
    .then((res) => {
      if (res.data.secured !== 1)
        console.log("not authenticated")
      if (res.data.secured === 1)
        setAuth(true)
    }) 
   
    if (auth === true) {
      return (  
        <div> 
            <div className="Header" data-cy="blog-page-header">
              <p1>The ULTIMATE Blog Site</p1>
            </div>
            <div className="blog-page-body" data-cy="blog-page-body">
              
              <SubmitBlog />

              {displayBlogs(cardData)}

            </div>
        </div>
    ) }
    else {
      return (
        <div className="blog-page-body" data-cy="blog-page-body">
            <p1>USER IS NOT AUTHORIZED TO VIEW THIS CONTENT</p1>
        </div>
      )
    }
}

export default BlogPage;