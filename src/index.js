import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

const requestInterceptor = axios.interceptors.request.use(
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

const resInterceptor = axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(resInterceptor);
axios.interceptors.request.eject(requestInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
