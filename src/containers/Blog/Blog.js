import React, { Component } from "react";
// import axios from "axios";
import Posts from "./Posts/Posts";
import { Route, Link } from "react-router-dom";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit", //jump to any ID submit in that elements
                    search: "?quick-submit=true", //search allow to add queryParams
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/new-post" exact render={() => <h1>New Post</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
