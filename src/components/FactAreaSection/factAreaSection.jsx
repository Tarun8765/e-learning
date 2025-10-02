import "./factAreaSection.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import factCounterData from "../data/FactCountData.json";
function FactAreaSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.5, // start when 50% visible
  });
  return (
    <section className="fact_area">
      <div className="container">
        <div className="fact_inner-wrap">
          <div className="row fact-row d-flex flex-wrap mt-0 align-items-center justify-content-center ">
            {factCounterData?.factCountData?.map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-6">
                  <div className="fact_item  position-relative">
                    <div
                      ref={ref}
                      style={{ height: "100px", textAlign: "center" }}
                    >
                      {inView && (
                        <h2 className="count text-light">
                          <CountUp
                            start={item.start}
                            end={item.end}
                            duration={4}
                          />
                          {item.figure}
                        </h2>
                      )}
                      <p className="fact-description text-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactAreaSection;
