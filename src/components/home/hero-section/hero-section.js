import React from "react";
import "./hero-section.css";
import Image from "next/image";
import ProductCarousel from "./product-carousel/product-carousel";

const HeroSection = () => {
  return (
    <section id="hero-section" className="section-padding">
      <div className="hero-section-title-wrapper">
        <div className="hero-section-subtitle-wrapper">
          <h4 className="hero-section-subtitle">
            TRUSTED BY 100+ CRYPTO DEGENS{" "}
          </h4>
          <div className="subtitle-icons">
            <div className="subtitle-icon-wrapper">
              <div className="subtitle-icon-container">
                <Image
                  src="/images/home/hero-section/subtitle-icon01.svg"
                  width={16}
                  height={22}
                  alt="subtitle-icon01"
                />
              </div>
            </div>
            <div className="subtitle-icon-wrapper">
              <div className="subtitle-icon-container">
                <Image
                  src="/images/home/hero-section/subtitle-icon02.svg"
                  width={16}
                  height={22}
                  alt="subtitle-icon01"
                />
              </div>
            </div>
            <div className="subtitle-icon-wrapper">
              <div className="subtitle-icon-container">
                <Image
                  src="/images/home/hero-section/subtitle-icon03.svg"
                  width={16}
                  height={22}
                  alt="subtitle-icon01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section-title">
          <h2 className="hero-section-heading">
            Shop
            <span>
              <Image
                src="/images/home/hero-section/title-icon01.svg"
                width={56}
                height={56}
                className="title-cart-vector"
              />
            </span>{" "}
            <span className="title-anywhere">anywhere<span className="relative"><Image src="/images/home/hero-section/title-star.svg" width={22} height={25} className="title-star anywhere" /></span></span><br/> Get{" "}
            <span className="title-free-ownership">
              <Image src="/images/home/hero-section/title-squiggle.svg" width={500} height={100} className="title-squiggle" />
              <span className="title-free">Free </span>{" "}
              <span className="title-ownership"> Ownership</span>
            </span>
            <span>
              <Image src="/images/home/hero-section/title-icon02.svg" width={48} height={48} className="title-icon" />
            </span>
             {" "}Save {" "}
             <span>
              <Image src="/images/home/hero-section/title-icon03.svg" width={40} height={40} className="title-icon" />
            </span>
            {" "} on <span className="title-any">Any <span className="relative"><Image src="/images/home/hero-section/title-star.svg" width={28} height={32} className="title-star any1" /><Image src="/images/home/hero-section/title-star.svg" width={22} height={28} className="title-star any2" /></span> </span> Price.
          </h2>
        </div>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default HeroSection;
