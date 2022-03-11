import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./Features";
import Pricing from "./Pricing";
import Resources from "./Resources";
import Layout from "./Layout";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
