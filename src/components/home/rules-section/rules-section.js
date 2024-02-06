import React from "react";
import "./rules-section.css";
import Image from "next/image";

const RulesSection = () => {
  return (
    <section id="rules-section">
      <div className="rules-section section-padding">
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
