import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetter from "../components/newsletter/newsletter";
import BestCourseSection from "../components/BestCourseSection/BestCourseSection";
import BannerSection from "../components/BannerSection/BannerSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import SkillsIntroSection from "../components/SkillsIntroSection/SkillsIntroSection";
import FactAreaSection from "../components/factAreaSection/factAreaSection";
import FaqAreaSection from "../components/faqAreaSection/FaqAreaSection";
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
