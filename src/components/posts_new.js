import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'

class PostsNew extends Component {
    render() {
        const { fields: { title, categories, content}, handleSubmit, createPost } = this.props;

        return (
            <form onSubmit={ handleSubmit(createPost) }>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 2nd is maptDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',   // Name does not need to match component name
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);