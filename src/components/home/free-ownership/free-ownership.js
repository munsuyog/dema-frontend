'use client'
import React from "react";
import "./free-ownership.css";
import Image from "next/image";
import FeaturesAnimation from "@/components/common/features-animation/features-animation";
import SkewedButton from "@/components/common/skewed-button/skewed-button";
import useIntersectionObserver from "@/animations/useIntersectionObserver";

const FreeOwnership = () => {
  const animationStyleParams = {
    "--L": "423.50000000000006",
     "--time": "2s"
  }
  const svgRef = useIntersectionObserver((target) => {
    target.classList.remove('inactive');
    target.classList.add('active');
  }, {threshold: 0.5})
  return (
    <section id="free-ownership">
      <div className="free-ownership section-padding">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">FREE OWNERSHIP</h4>
          <h2 className="free-ownership-title">
            help <span className="title-blue">build it </span> & get <br />
            to <span className="title-blue">own it for </span>{" "}
            <span className="title-free">
            <svg class="inactive free-squiggle" xmlns="http://www.w3.org/2000/svg" width="190%" viewBox="0 0 156 82" fill="none" ref={svgRef}>
                                <path d="M142.408 59.1107C98.255 67.6411 8.94169 74.6452 4.91618 34.4178C1.93227 4.59936 58.5 2.45193 93.9999 4.9763C129.5 7.50067 148.505 22.5154 150.968 39.3737C154.996 66.9348 126.534 78.0488 116.708 77.1963" stroke="#3830C9" stroke-width="8" stroke-linecap="round" class="tracePath" time="2s" style={animationStyleParams}></path>
                            </svg>
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
