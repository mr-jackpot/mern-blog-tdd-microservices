import axios from "axios";
import React from "react";
import './cards.css'

const BlogCard = (props) => {

    const [blog, setBlog] = React.useState(props.blog)
    const [showBlog, setShowBlog] = React.useState(false)

    const bo = {
        date: new Date().toISOString(),
        blog: blog
    }

    const handleClick = (event) => {
        event.preventDefault()
        setShowBlog(true)
    }

    const SubmitBlogForm = () => {
      
        if (!showBlog) {
            return (
            <div>
                <form>
                    <textarea onChange={(b) => setBlog(b.target.value)} value={blog}></textarea>
                    <submit type="submit" value="Post Blog"></submit>
                </form>
            </div>
            )} else {
                return (<div>RETURN FIRING</div>)
        }
    }

    const deletePost = (event) => {
        event.preventDefault()
        axios.delete(`http://localhost:3005/api/blogs/${props.id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

        window.location.reload()
    }

    const updatePost = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3005/api/blogs/${props.id}`, bo)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

        window.location.reload()
    }

    if (props.user !== null) {
    return (
        <div className="blog-container" data-cy="blog-container">
            <div className="container-header">
                <div className="header-user"> {props.user} </div>
                <div className="header-date"> {props.date} </div>
                <div className="header-delete"> 
                    <button id="delete-post-button" onClick={deletePost} data-cy="delete-post-button"> Remove</button>
                </div>
                <div className="header-update">
                    <form>
                        <button id="update-post-button" onClick={handleClick}> Update </button>
                    </form>
                </div>
            </div>
            <div className="container-body">
                <div className="body-blog"> 
                    {blog}
                </div>
                <SubmitBlogForm />
            </div>
        </div>
    )}
    
    return (<div className="blog-card-error">Error. Please check browser console.</div>) 
}

export default BlogCard;