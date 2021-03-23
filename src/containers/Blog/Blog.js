import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 6);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Tony",
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log(responpmnse);
      }) //GET request{}
      //then is a method which takes a function as the input and this func will get executed once the promise resolves
      // this.setState({post: response.data})
      .catch((error) => {
        this.setState({ error: true });
      }); //CATCH: catch error
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

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
      return (
        <div>
          <section className="Posts">{posts}</section>
          <section>
            <FullPost id={this.state.selectedPostId} />
          </section>
          <section>
            <NewPost />
          </section>
        </div>
      );
    }
    return (
      <div>
        <h1>Something went wrong!!!</h1>
      </div>
    );
  }
}

export default Blog;
