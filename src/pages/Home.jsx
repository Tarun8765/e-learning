import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetter from "../components/newsletter/newsletter";

function Home() {
  return (
    <div>
      <BannerSection />
      <CategoriesSection />
      <BestCourseSection />
      <CourseSlider />
      <SkillsIntroSection />
      <FactAreaSection />
      <FaqAreaSection />
      <NewsLetter />
    </div>
  );
}

export default Home;
