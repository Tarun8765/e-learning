import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import AboutAreaSection from "../components/AboutAreaSection/AboutAreaSection";
import BannerSection from "../components/BannerSection/BannerSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import FaqAreaSection from "../components/faqAreaSection/FaqAreaSection";
import BestCourseSection from "../components/BestCourseSection/BestCourseSection";
import SkillsIntroSection from "../components/SkillsIntroSection/SkillsIntroSection";
import FactAreaSection from "../components/FactAreaSection/factAreaSection";
import NewsBlogSection from "../components/BlogAeaSection/BlogAreaSection";
import NewsLetterSection from "../components/templates/NewsLetterSection/NewsLetterSection";
function Home() {
  return (
    <div>
      <BannerSection />
      <CategoriesSection />
      <CourseSlider />
      <AboutAreaSection />
      <BestCourseSection />
      <SkillsIntroSection />
      <FactAreaSection />
      <FaqAreaSection />
      <NewsBlogSection />
      <NewsLetterSection />
    </div>
  );
}

export default Home;
