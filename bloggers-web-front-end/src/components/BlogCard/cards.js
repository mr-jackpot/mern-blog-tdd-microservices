import axios from "axios";
import React from "react";
import './cards.css'
import moment from "moment"
import { BiUserCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const BlogCard = (props) => {

    const [blog, setBlog] = React.useState(props.blog)
    const [showBlog, setShowBlog] = React.useState(false)

    const bo = {
        date: new Date().toISOString(),
        blog: blog
    }

    const SubmitBlogForm = () => {
      
        if (showBlog) {
            return (
            <div>
                <form>
                    <div>
                        <textarea id="update-blog-textarea" data-cy="update-blog-textarea" onChange={(b) => setBlog(b.target.value)} value={blog}></textarea>
                    </div>
                    <div>
                        <button id="cancel-post-button" data-cy="cancel-post-button"> Cancel </button>
                        <button id="submit-post-button" data-cy="submit-post-button" onClick={handleSubmit}> Submit Update </button>
                    </div>
                </form>
            </div>
            )} else {
                return (<div>
                            <button id="update-post-button" data-cy="update-post-button" onClick={handleClick}> Update </button>
                        </div>)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()
        setShowBlog(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        updatePost()
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

    const updatePost = () => {

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
                    <div className="header-user"> <BiUserCircle size={18} /> {props.user} </div>
                    <div className="header-date"> {moment(props.date).utc().format('DD/MM/YYYY HH:MM:ss')} </div>
                    <div className="header-delete"> 
                        <button id="delete-post-button" onClick={deletePost} data-cy="delete-post-button"> <AiFillDelete size={15} /> Remove</button>
                    </div>
                    <div className="header-update">
                        <form>
                            
                        </form>
                    </div>
                </div>
                <div className="container-body">
                    <div className="body-blog"> 
                        {blog}
                    </div>
                    {SubmitBlogForm()}
                </div>
            </div>
        )}
    
        return (<div className="blog-card-error">Error. Please check browser console.</div>) 
    }

export default BlogCard;