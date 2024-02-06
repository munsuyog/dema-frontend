import React from "react";
import "./save-on-section.css";
import Image from "next/image";

const SaveOnSection = () => {
  return (
    <section id="save-on-section">
      <div className="save-on-section section-padding">
        <div className="section-title-wrapper">
          <h4 className="section-subtitle">SAVE ON ANY PRICE</h4>
          <h2 className="save-on-title">
            <span className="title-blue">save 5%</span> or more <br />
            <span className="title-even-after-wrapper">
              <span className="title-even-after">
                even after
                <Image
                  src="/images/home/save-on-section/even-after-squiggle.svg"
                  width={215}
                  height={74}
                  className="even-after-squiggle"
                />
                <Image
                  src="/images/home/save-on-section/sale-tag.svg"
                  width={57}
                  height={57}
                  className="sale-tag"
                />
              </span>{" "}
              discounts & coupons
            </span>
          </h2>
          <Image src="/images/home/save-on-section/dotted-squiggle.svg" width={191} height={117} className="dotted-squiggle"/>
        </div>
        <div className="save-on-container">
            <div className="save-on-features-container">
                <div className="save-on-features">
                <div className="save-on-feature">
                    <div className="save-on-feature-number-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="60" viewBox="0 0 66 60" fill="none">
                            <path d="M58.884 25.1802C64.3531 34.3419 53.9178 47.1732 41.3158 49.1739C28.2073 51.2551 15.2087 52.8752 9.73963 43.7135C4.27058 34.5518 12.6306 16.449 23.0614 10.3952C33.4922 4.34143 48.4804 15.6087 58.884 25.1802Z" fill="#22E393"/>
                            <path d="M55.204 26.4685C59.8668 34.2796 50.9699 45.2193 40.2256 46.9252C29.0495 48.6995 17.967 50.0808 13.3042 42.2696C8.64132 34.4585 15.769 19.0243 24.6621 13.863C33.5552 8.70159 46.334 18.3079 55.204 26.4685Z" fill="#3830C9"/>
                        </svg>
                        <div className="save-on-feature-number-highlight">1</div>
                    </div>
                    <h3 className="save-on-feature-title-highlight">Auto-select the lowest price seller</h3>
                </div>
                <div className="save-on-feature">
                    <div className="save-on-feature-number-container">
                    <svg width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.4357 19.0199C61.7899 29.6644 74.2855 36.2859 62.1665 43.3195C50.0474 50.3531 15.0124 53.4575 8.65814 42.813C2.30391 32.1685 16.4824 17.3502 28.6014 10.3166C40.7205 3.28299 49.0815 8.37538 55.4357 19.0199Z" fill="#3830C9"/>
                        <path d="M51.1737 21.4619C56.3237 30.0891 66.4512 35.4557 56.6289 41.1563C46.8067 46.8569 18.4113 49.373 13.2614 40.7458C8.11137 32.1186 19.6028 20.1086 29.4251 14.408C39.2473 8.70741 46.0237 12.8347 51.1737 21.4619Z" fill="white"/>
                    </svg>
                        <div className="save-on-feature-number">2</div>
                    </div>
                    <h3 className="save-on-feature-title">Auto-select the lowest price seller</h3>
                </div>
                <div className="save-on-feature">
                    <div className="save-on-feature-number-container">
                    <svg width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.4357 19.0199C61.7899 29.6644 74.2855 36.2859 62.1665 43.3195C50.0474 50.3531 15.0124 53.4575 8.65814 42.813C2.30391 32.1685 16.4824 17.3502 28.6014 10.3166C40.7205 3.28299 49.0815 8.37538 55.4357 19.0199Z" fill="#3830C9"/>
                        <path d="M51.1737 21.4619C56.3237 30.0891 66.4512 35.4557 56.6289 41.1563C46.8067 46.8569 18.4113 49.373 13.2614 40.7458C8.11137 32.1186 19.6028 20.1086 29.4251 14.408C39.2473 8.70741 46.0237 12.8347 51.1737 21.4619Z" fill="white"/>
                    </svg>
                        <div className="save-on-feature-number">3</div>
                    </div>
                    <h3 className="save-on-feature-title">Get <span className="dema-font">d<span className="title-blue">e</span>ma</span>'s 5% savings</h3>
                </div>
                </div>
                <div className="discount-coupon" >
                    <span className="e-vector1">e</span>
                    <span className="e-vector2">e</span>
                    <div className="discount-coupon-container">
                        <div>
                            <div className="discount-title">Discount Coupons</div>
                            <div className="discount-off">10% Off</div>
                        </div>
                        <Image src="/images/home/save-on-section/barcode.svg" width={18} height={56} className="barcode" />
                    </div>
                </div>
            </div>
            <div className="save-on-video-container">
                <div className="save-on-video">
                    <video className="video" src="/images/home/free-ownership/video.mp4" controls />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SaveOnSection;
