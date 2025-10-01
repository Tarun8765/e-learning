import React from "react";
import TestimonialSection from "../components/templates/TestimonialSection/TestimonialSection";
import FeaturesSection from "../components/templates/FeaturesSection/FeaturesSection";
import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetterSection from "../components/templates/NewsLetterSection/NewsLetterSection";
import NewSkillsSection from "../components/templates/NewSkillsSection/NewSkillsSection";
import Breadcrumb from "../components/templates/Breadcrumb/Breadcrumb";

function About() {
  const breadcrumbList = [
    {
      href:'/',
      text:'Home'
    },
    {
      text:'About Us'
    }
  ]
  return (
  <>
    <Breadcrumb 
      title='Who We Are'
      linkList={breadcrumbList}
    />
    <CourseSlider />
    <NewSkillsSection />
    <NewsLetterSection />
    <FeaturesSection />
    <TestimonialSection/>
  </>
  );
}

export default About;
