import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetter from "../components/newsletter/newsletter";
import BannerSection from "../components/BannerSection/BannerSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import FaqAreaSection from "../components/faqAreaSection/FaqAreaSection";
import BestCourseSection from "../components/BestCourseSection/BestCourseSection";
import SkillsIntroSection from "../components/SkillsIntroSection/SkillsIntroSection";
import FactAreaSection from "../components/FactAreaSection/factAreaSection";
import NewsLetterSection from "../components/templates/NewsLetterSection/NewsLetterSection";
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
      <NewsLetterSection /> 
    </div>
  );
}

export default Home;
