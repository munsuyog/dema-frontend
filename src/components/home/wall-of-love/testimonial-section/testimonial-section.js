import Image from "next/image";
import React from "react";
import "./testimonial-section.css";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-row">
        <div className="testimonial-md">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[0].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[0].name}</h4>
                <p className="testimonial-userid">{testimonials[0].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[0].content}</p>
          <div className="testimonial-video">
            <video src={testimonials[0].video} width={299} />
          </div>
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[0].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[0].date}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-sm">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[1].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[1].name}</h4>
                <p className="testimonial-userid">{testimonials[1].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[1].content}</p>
          {testimonials[1].video ? (
            <div className="testimonial-video">
              <video src={testimonials[1].video} width={299} />
            </div>
          ) : (
            ""
          )}
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[0].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[0].date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-row">
        <div className="testimonial-lg">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[2].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[2].name}</h4>
                <p className="testimonial-userid">{testimonials[2].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[2].content}</p>
          {testimonials[2].video ? (
            <div className="testimonial-video">
              <video src={testimonials[2].video} width={299} />
            </div>
          ) : (
            ""
          )}
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[2].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[2].date}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-sub-row">
        <div className="testimonial-xs">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[3].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[3].name}</h4>
                <p className="testimonial-userid">{testimonials[3].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[3].content}</p>
          {testimonials[3].video ? (
            <div className="testimonial-video">
              <video src={testimonials[3].video} width={299} />
            </div>
          ) : (
            ""
          )}
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[3].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[3].date}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-xs">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[4].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[4].name}</h4>
                <p className="testimonial-userid">{testimonials[4].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[4].content}</p>
          {testimonials[4].video ? (
            <div className="testimonial-video">
              <video src={testimonials[4].video} width={299} />
            </div>
          ) : (
            ""
          )}
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[4].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[4].date}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="testimonial-row">
      <div className="testimonial-md">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[0].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[0].name}</h4>
                <p className="testimonial-userid">{testimonials[0].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[0].content}</p>
          <div className="testimonial-video">
            <video src={testimonials[0].video} width={299} />
          </div>
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[0].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[0].date}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-sm">
          <div className="testimonial-header">
            <div className="testimonial-profile">
              <Image
                src={testimonials[1].userImage}
                width={45}
                height={45}
                className="testimonial-userImage"
                alt="userImage"
              />
              <div>
                <h4 className="testimonial-name">{testimonials[1].name}</h4>
                <p className="testimonial-userid">{testimonials[1].userID}</p>
              </div>
            </div>
            <Image
              src="/images/home/wall-of-love/twitter.svg"
              width={22.25}
              height={18.09}
              alt="twitter"
            />
          </div>
          <p className="testimonial-content">{testimonials[1].content}</p>
          {testimonials[1].video ? (
            <div className="testimonial-video">
              <video src={testimonials[1].video} width={299} />
            </div>
          ) : (
            ""
          )}
          <div className="testimonial-insights">
            <div className="testimonial-like-container">
              <Image
                className="testimonial-like-vector"
                src="/images/home/wall-of-love/like.svg"
                width={20}
                height={20}
              />
              <div className="testimonial-like">{testimonials[0].likes}</div>
            </div>
            <div>
              <p className="testimonial-date">{testimonials[0].date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
