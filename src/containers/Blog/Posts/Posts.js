import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
class Posts extends Component {
  state = {
    posts: [],
  };
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 6);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Tony",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (!this.state.error) {
      const posts = this.state.posts.map((post) => {
        return (
          <Post
            clicked={() => this.postSelectedHandler(post.id)}
            key={post.id}
            title={post.title}
            author={post.author}
          />
        );
      });
      return <section className="Posts">{posts}</section>;
    }
  }
}

export default Posts;
