import React from "react";
import "./TestimonialSection.css";
import TestimonialSlider from "../../organisms/TestimonialSlider/TestimonialSlider";
import mockData from "../../data/testimonial.json";
import SectionHeader from "../../organisms/SectionHeader/SectionHeader";

export default function TestimonialSection() {
  return (
    <section className="testimonial__area py-120">
      <div className="container">
        <SectionHeader
          title={mockData?.testimonialHeading?.title}
          headingText={mockData?.testimonialHeading?.heading}
          content={mockData?.testimonialHeading?.content}
        />
        <TestimonialSlider slides={mockData?.testimonialReview} />
      </div>
    </section>
  );
}
