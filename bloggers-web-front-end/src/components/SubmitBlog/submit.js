import React from 'react';
import './submit.css'

const SubmitBlog = () => {
  
    return (
        <div className="submit-blog-container">
            <div className="submit-blog-form" data-cy="submit-blog-form">
                <form>
                    <label>
                        Submit Blog:
                        <textarea></textarea>
                    </label>
                </form>
            </div>        
        </div>
    )
}

export default SubmitBlog