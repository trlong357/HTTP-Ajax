import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
// const requestInterceptor = axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     //return request to revent blocking it
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    //return request to revent blocking it
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// const resInterceptor = axios.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// axios.interceptors.request.eject(resInterceptor);
// axios.interceptors.request.eject(requestInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
