import "./NewSkillsSection.css";
import SectionHeader from "../../organisms/SectionHeader/SectionHeader";
import mockData from "../../data/NewSkillsData.json";
import OfferFeatureItem from "../../molecules/OfferFeatureItem/OfferFeatureItem";
import Certificate from "../../atoms/Icons/Certificate";
import Book from "../../atoms/Icons/Book";
import EducationCap from "../../atoms/Icons/EducationCap";

export default function NewSkillsSection() {
  return (
    <section className="features__area-three pt-120 pb-90">
        <div className="container">
            <SectionHeader 
                title={mockData?.offerNewSkillsHeading?.title}
                classNameWrapper='py_26'
                headingText={mockData?.offerNewSkillsHeading?.heading}
                content={mockData?.offerNewSkillsHeading?.content}
            />
            <div className="features__item-wrap">
                <div className="row justify-content-center">
                    {mockData?.offerNewSkillsList?.map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 offer_features_cal" key={index}>
                                <OfferFeatureItem
                                    icon={item?.icon ==='certificate' ? <Certificate />: item?.icon ==='book' ? <Book />  : <EducationCap />}
                                    title={item?.title} 
                                    content={item?.content} 
                                    starIcon={item?.extraIcon}
                                    headingClass='h5' 
                               /> 
                            </div>
                        )
                    })} 
                </div>
            </div>
          </div>
    </section>
  );
}
