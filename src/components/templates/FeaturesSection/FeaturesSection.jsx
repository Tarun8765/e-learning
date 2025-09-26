import React from 'react'
import './FeaturesSection.css';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';
import mockData from  '../../data/FeaturesData.json'
import FeaturesItem from '../../molecules/FeaturesItem/FeaturesItem';

export default function FeaturesSection() {
  return (
    <section className="features__area">
            <div className="container">
                <SectionHeader 
                    title={mockData?.featuresHeading?.title}
                    columnSize='col-xl-6'
                    classNameTitle='bg_parpule'
                    classNameWrapper='py_26'
                    classNameHeading='text-white'
                    headingText={mockData?.featuresHeading?.heading}
                    content={mockData?.featuresHeading?.content}
                />
                <div className="row justify-content-center">
                    {mockData?.featuresList?.map((item,index)=>{
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                                <FeaturesItem 
                                    src={item?.icon}
                                    alt={item?.title}
                                    heading={item?.title} 
                                    comtent={item?.content} 
                                    img_wraper='mb_20'
                                    item_wraper='text-center'
                                    item_title_class="text-white h4 mb_10"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
  )
}
