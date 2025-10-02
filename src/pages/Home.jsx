import React from "react";
import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetter from "../components/newsletter/newsletter";
import NewsLetterSection from "../components/templates/NewsLetterSection/NewsLetterSection";


function Home() {
  return (
    <div>
      <CourseSlider />
      <NewsLetterSection /> 
    </div>
  );
}

export default Home;
