'use client'
import React from "react";
import "./rules-section.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

const RulesSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const rules = carousel.querySelectorAll(".rule");

    let currentIndex = 0;
    let interval;

    const scrollRule = () => {
      const currentRule = rules[currentIndex];
      currentRule.scrollIntoView({ behavior: "smooth" });

      currentIndex = (currentIndex + 1) % rules.length;
    };

    const handleScroll = () => {
      const rulesSection = document.getElementById("rules-section");
      const rect = rulesSection.getBoundingClientRect();

      if (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // User viewport is within the rules section, start the carousel
        clearInterval(interval);
        interval = setInterval(scrollRule, 5000);
      } else {
        // User viewport is outside the rules section, stop the carousel
        clearInterval(interval);
      }
    };

    // Add scroll event listener to handle user scroll interaction
    window.addEventListener("scroll", handleScroll);

    // Initial start of the interval if the user viewport is within the rules section
    handleScroll();

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll); // Clean up the scroll event listener
    };
  }, []);
  return (
    <section id="rules-section">
      <div className="rules-section section-padding" ref={carouselRef}>
        <div className="section-title-wrapper">
          <h2 className="rules-section-title">
            Rules decided by{" "}
            <span className="title-operator">
              Operator{" "}
              <Image
                src="/images/home/rules-section/operator-squiggle.svg"
                width={220}
                height={70}
                className="operator-squiggle"
              />
            </span>{" "}
            <span className="title-you">You!</span>
          </h2>
        </div>
        <div className="rules-container">
          <div className="rule">
            <div className="rule-header">
              <div className="rule-number-wrapper">
                <Image
                  className="rule-number-background"
                  src="/images/home/rules-section/number-background01.svg"
                  width={140}
                  height={120}
                />
                <div className="rule-number">
                  <Image
                    className="rule-number-flower"
                    src="/images/home/rules-section/flower.svg"
                    width={27}
                    height={27}
                  />
                  <h3>01</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                  Valuable
                  <br />
                  <span>
                    Reputation
                    <Image
                      src="/images/home/rules-section/reputation-star.svg"
                      width={42}
                      height={42}
                      className="reputation-star"
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">
              Good ones now pay you back!
              </h3>
            </div>
            <p className="rule-paragraph">
              A valuable asset, not just lip service! You earn it with actions you take. And in time, you’ll be able to use it not just at <span className="title-dema">d<span className="title-blue">e</span>ma</span>! It lives in your wallet so it’s really yours & you choose who sees it!
            </p>
          </div>
          <div className="rule">
            <div className="rule-header">
              <div className="rule-number-wrapper">
                <Image
                  className="rule-number-background"
                  src="/images/home/rules-section/number-background01.svg"
                  width={140}
                  height={120}
                />
                <div className="rule-number">
                  <Image
                    className="rule-number-flower"
                    src="/images/home/rules-section/flower.svg"
                    width={27}
                    height={27}
                  />
                  <h3>01</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                  Valuable
                  <br />
                  <span>
                    Reputation
                    <Image
                      src="/images/home/rules-section/reputation-star.svg"
                      width={42}
                      height={42}
                      className="reputation-star"
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">
              Good ones now pay you back!
              </h3>
            </div>
            <p className="rule-paragraph">
              A valuable asset, not just lip service! You earn it with actions you take. And in time, you’ll be able to use it not just at <span className="title-dema">d<span className="title-blue">e</span>ma</span>! It lives in your wallet so it’s really yours & you choose who sees it!
            </p>
          </div>
          <div className="rule">
            <div className="rule-header">
              <div className="rule-number-wrapper">
                <Image
                  className="rule-number-background"
                  src="/images/home/rules-section/number-background01.svg"
                  width={140}
                  height={120}
                />
                <div className="rule-number">
                  <Image
                    className="rule-number-flower"
                    src="/images/home/rules-section/flower.svg"
                    width={27}
                    height={27}
                  />
                  <h3>01</h3>
                </div>
              </div>
              <div className="rule-title-wrapper">
                <h2 className="rule-title">
                  Valuable
                  <br />
                  <span>
                    Reputation
                    <Image
                      src="/images/home/rules-section/reputation-star.svg"
                      width={42}
                      height={42}
                      className="reputation-star"
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
            <div className="rule-subtitle-wrapper">
              <h3 className="rule-subtitle">
              Good ones now pay you back!
              </h3>
            </div>
            <p className="rule-paragraph">
              A valuable asset, not just lip service! You earn it with actions you take. And in time, you’ll be able to use it not just at <span className="title-dema">d<span className="title-blue">e</span>ma</span>! It lives in your wallet so it’s really yours & you choose who sees it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
