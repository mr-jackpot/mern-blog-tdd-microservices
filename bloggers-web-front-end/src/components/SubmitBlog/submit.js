import React from 'react';
import './submit.css';
import axios from 'axios';

const SubmitBlog = () => {

    const postBlog = () => {
        axios.post('http://localhost:3005/api/blogs', 
        {
            user: "Front End User",
            date: "9999-01-01T00:00:00.000Z",
            blog: "BLEEP BLOOP"
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postBlog();
      };
  
    return (
        <div className="submit-blog-container">
                <form data-cy="submit-blog-form" onSubmit={handleSubmit}>
                    <div className="submit-blog-text-container" data-cy="submit-blog-text-container">
                        <label>
                            <textarea id="blog-input-textarea" placeholder="Post a blog..."></textarea>
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