import React, { Component } from "react";
import TextInputGroup from "../../layout/TextInputGroup/TextInputGroup";
import PropTypes from 'prop-types'

import { connect } from "react-redux"
import { addPost } from "../../../actions/postActions"

import newId from "../../../newId";

class AddPost extends Component {
  state = {
    title: "",
    body: "",
    id: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;

    if (title === "") {
      this.setState({ errors: { title: "title is required" } });
      return;
    }
    if (body === "") {
      this.setState({ errors: { body: "title is required" } });
      return;
    }

    const newPost = {
      title,
      body,
      id: newId()
    }; // to samo co title: title, body: body /\

    this.props.addPost(newPost); //submitting new post

    this.setState({
      title: "",
      body: "",
      id: "",
      errors: {}
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, body, errors } = this.state;

    return (
      <div className="card mb-2">
        <div className="card-header">Add post</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Title"
              name="title"
              placeholder="instert title"
              value={title}
              onChange={this.onChange}
              error={errors.title}
            />
            <TextInputGroup
              label="Body"
              name="body"
              placeholder="instert content"
              value={body}
              onChange={this.onChange}
              error={errors.body}
            />
            <input
              type="submit"
              defaultValue="Add post"
              className="btn btn-sm btn-block btn-outline-success"
            />
          </form>
        </div>
      </div>
    );
  }
}

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(null, { addPost })(AddPost);
