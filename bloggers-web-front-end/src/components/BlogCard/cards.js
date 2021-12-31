import axios from "axios";
import React from "react";
import './cards.css'

const BlogCard = (props) => {

    const [blog, setBlog] = React.useState("");
    const [isEditing, setEditing] = React.useState(false);

    const bo = {
        date: new Date().toISOString(),
        blog: blog
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

    const prepareUpdate = (event) => {
        event.preventDefault()
        setEditing(true)
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

    const cancelUpdate = (event) => {
        event.preventDefault()
        this.setEditing(false)
    }

    const SubmitUpdate = () => {
        if (isEditing) {
            return <div>
                    <button onClick={updatePost}> Submit </button>
                    <button onClick={cancelUpdate}> Cancel </button>
                </div>
        } else {
            return <div>
                    <button id="update-post-button" onClick={prepareUpdate} data-cy="update-post-button"> Update Post</button>
                </div>
        }

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
                    <SubmitUpdate />
                </div>
            </div>
            <div className="container-body">
                <div className="body-blog"> {props.blog} </div>
            </div>
        </div>
    )}
    
    return (<div className="blog-card-error">Error. Please check browser console.</div>) 
}

export default BlogCard;