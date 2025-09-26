import CourseSlider from "../components/organisms/CourseSlider/CourseSlider";
import NewsLetter from "../components/newsletter/newsletter";
import BestCourseSection from "../components/BestCourseSection/BestCourseSection";
import BannerSection from "../components/BannerSection/BannerSection";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
function Home() {
  return (
    <div>
      <BannerSection />
      <CategoriesSection />
      <BestCourseSection />
      <CourseSlider />
      <NewsLetter />
    </div>
  );
}

export default Home;
