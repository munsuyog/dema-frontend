'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './features-animation.css';

const FeaturesAnimation = () => {
  const featureRefs = [useRef(), useRef(), useRef()];
  const progressBarRef = useRef();

  useEffect(() => {
    const progressAnim = gsap.timeline({repeat: 3, paused: true, scrollTrigger: {
        trigger: '.free-ownership'
    }})
    const tl = gsap.timeline({ repeat: 3, paused: true, repeatDelay: 1, scrollTrigger: {
        trigger: '.free-ownership'
    } });

    // Progress bar animations
    progressAnim.fromTo(progressBarRef.current,{y: 0}, { y: 45, duration: 2, delay: 3 })
      .fromTo(progressBarRef.current,{y: 45}, { y: 85, duration: 2, delay: 3.5 })
      .fromTo(progressBarRef.current,{y: 85}, { y: 0, duration: 2, delay: 2 })

    // Text animations
    featureRefs.forEach((featureRef, index) => {
      tl.to(featureRef.current, {
        duration: 0.5,
        fontSize: '32px',
        color: '#3830C9',
        fontWeight: 'bold',
        ease: 'power2.inOut',
        delay: 1.5
      })
      .to(featureRef.current, {
        duration: 0.5,
        fontSize: '20px',
        color: 'black',
        fontWeight: '500',
        ease: 'power2.inOut',
        delay: 1.5
      });
    });

    tl.progress(1);
    tl.play();
    progressAnim.progress(1);
    progressAnim.play();

    return () => {
      tl.kill();
      progressAnim.kill();
    };
  }, []);

  return (
    <div className='features-animation'>
      <div className='features-animation-progress'>
        <div className='features-aniation-progress-current' ref={progressBarRef}></div>
      </div>
      <div className='features-animation-features'>
        {featureRefs.map((ref, index) => (
          <div
            key={index}
            ref={ref}
            className={`feature${index + 1} ${index === 0 ? 'active' : ''}`}
          >
            {index === 0 && 'Shop & Earn'}
            {index === 1 && 'Refer & Earn'}
            {index === 2 && 'Sell & Earn'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesAnimation;
