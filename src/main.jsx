import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Layout } from "./components/_components";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <div>About</div>
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <div>Projects</div>
            </Layout>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout>
              <div>Resume</div>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <div>Contact</div>
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <div>Blog</div>
            </Layout>
          }
        />
        <Route path="*" element={<article>404</article>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
