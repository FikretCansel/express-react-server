import { join } from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";
import AboutUs from "./pages/AboutUs"
import template from "./template";
import fetch from 'node-fetch';

const server = express();
console.log(join(__dirname, "../public"))
server.use("/public", express.static(join(__dirname, "../public")));

server.get("/", async (req, res) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
  const initialState = {posts: data};

  const appString = renderToString(<App {...initialState}/>);
  
  res.send(
    template({
      body: appString,
      title: "Hello World from the server",
      initialState: JSON.stringify(initialState)
    })
  );
});

server.get("/about-us", async (req, res) => {
  const initialState = {};
  const appString = renderToString(<AboutUs {...initialState}/>);

  res.send(
    template({
      body: appString,
      title: "About us",
      initialState: JSON.stringify(initialState)
    })
  );
});

server.listen(8080);

/* eslint-disable no-console */
console.log("listening on 8080");
/* eslint-enable no-console */
