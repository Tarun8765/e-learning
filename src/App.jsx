import { useState } from "react";
import { Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CourseSlider from "./components/organisms/CourseSlider/CourseSlider";
function App() {
  return (
    <>
      <Header></Header>
      <CourseSlider />
      { <Footer></Footer> }
    </>
  );
}

export default App;
