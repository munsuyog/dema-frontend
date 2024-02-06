import React from "react";
import "./roadmap-section.css";
import Image from "next/image";

const RoadmapSection = () => {
  return (
    <section id="roadmap-section">
      <div className="roadmap-section section-padding">
        <div className="section-title-wrapper">
          <h2 className="roadmap-section-title">
            A marketplace roadmap <br />
            where <span className="title-green">you</span> are{" "}
            <span className="title-priority title-blue">
              Priority #1.
              <Image
                src="/images/home/roadmap-section/priority-squiggle.svg"
                width={310}
                height={105}
                className="priority-squiggle"
              />
            </span>
          </h2>
          <Image
            src="/images/home/roadmap-section/squiggle.svg"
            width={84}
            height={131}
            className="roadmap-squiggle"
        />
        </div>

      </div>
    </section>
  );
};

export default RoadmapSection;
