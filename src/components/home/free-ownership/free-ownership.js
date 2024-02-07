import React from "react";
import "./free-ownership.css";
import Image from "next/image";
import FeaturesAnimation from "@/components/common/features-animation/features-animation";
import SkewedButton from "@/components/common/skewed-button/skewed-button";

const FreeOwnership = () => {
  return (
    <section id="free-ownership">
      <div className="free-ownership section-padding">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">FREE OWNERSHIP</h4>
          <h2 className="free-ownership-title">
            help <span className="title-blue">build it </span> & get <br />
            to <span className="title-blue">own it for </span>{" "}
            <span className="title-free">
              <Image
                src="/images/home/free-ownership/free-squiggle.svg"
                width={150}
                height={80}
                className="free-squiggle"
              />
              FREE<span className="title-blue">!</span>
            </span>
          </h2>
          <Image src="/images/home/free-ownership/squiggle.svg" width={219} height={119} alt="squiggle" className="free-ownership-squiggle" />
        </div>
        <div className="free-ownership-container">
            <div className="free-ownership-video-container">
                <div className="free-ownership-video">
                    <video className="video" src="/images/home/free-ownership/video.mp4" controls />
                </div>
            </div>
            <div className="free-ownership-animation">
                <div>
                    <FeaturesAnimation />
                </div>
                <div className="free-ownership-skewed-btn">
                    <SkewedButton text="Even sellers can get in on the action" fontSize="14px" width="161px" height="60px" />
                </div>
                <Image src="/images/home/free-ownership/free-squiggle-sm.svg" width={56} height={21} className="free-squiggle-sm" />
            </div>
        </div>
      </div>
      <Image src="/images/home/free-ownership/flower01.svg" width={44} height={44} className="free-flower-top" />
      <Image src="/images/home/free-ownership/star01.svg" width={50} height={56} className="free-star-bottom" />
      <Image src="/images/home/free-ownership/star01.svg" width={50} height={56} className="free-star-bottom-right" />
    </section>
  );
};

export default FreeOwnership;
