import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Resources from "./components/Resources";
import Layout from "./components/Layout";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Components nested in this parent route will be 
          displayed by the Layout component. Anything in the
          Layout component will also be rendered in all other pages,
          like the header or footer. */}
          <Route path="/" element={<Layout />}>
            {/* If there's nothing else inside the url, then
            this route index element will just show the Home component
            within the Layout component. For example, just display the
            home page if the url is just wwww.blah.com/ */}
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
