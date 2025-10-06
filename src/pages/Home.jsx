import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";

import BannerSection from "../components/BannerSection/BannerSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import FaqAreaSection from "../components/faqAreaSection/FaqAreaSection";
import BestCourseSection from "../components/BestCourseSection/BestCourseSection";
import SkillsIntroSection from "../components/SkillsIntroSection/SkillsIntroSection";
import FactAreaSection from "../components/FactAreaSection/factAreaSection";
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
    </div>
  );
}

export default Home;
