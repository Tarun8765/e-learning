import React from "react";
import TestimonialSection from "../components/templates/TestimonialSection/TestimonialSection";
import FeaturesSection from "../components/templates/FeaturesSection/FeaturesSection";
import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetterSection from "../components/templates/NewsLetterSection/NewsLetterSection";
import NewSkillsSection from "../components/templates/NewSkillsSection/NewSkillsSection";

function About() {
  return (
  <>
    <CourseSlider />
    <NewSkillsSection />
    <NewsLetterSection />
    <FeaturesSection />
    <TestimonialSection/>
  </>
  );
}

export default About;
