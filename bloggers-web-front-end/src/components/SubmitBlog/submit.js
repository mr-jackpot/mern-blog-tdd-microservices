import React from 'react';
import './submit.css'

const SubmitBlog = () => {
  
    return (
        <div className="submit-blog-container">
                <form>
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