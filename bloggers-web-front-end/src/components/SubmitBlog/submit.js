import React from 'react';
import './submit.css';
import axios from 'axios';

const SubmitBlog = () => {

    const [blog, setBlog] = React.useState("");

    const bo = {
        user: "Front End User", // TODO: Add auth to populate this
        date: new Date().toISOString(),
        blog: blog
    }

    const postBlog = () => {
        axios.post('http://localhost:3005/api/blogs', bo)
        .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postBlog();
        window.location.reload()
      };
  
    return (
        <div className="submit-blog-container">
                <form data-cy="submit-blog-form" onSubmit={handleSubmit}>
                    <div className="submit-blog-text-container" data-cy="submit-blog-text-container">
                        <label>
                            <textarea id="blog-input-textarea" placeholder="Post a blog..." 
                            onChange={(b) => setBlog(b.target.value)} value={blog} />
                        </label>
                    </div>
                    <div className="submit-blog-button-container" data-cy="submit-blog-button-container">
                        <input id="submit-blog-button" type="submit" value="Post Blog" />
                    </div>
                </form>
            </div>        
    )
}

export default SubmitBlog