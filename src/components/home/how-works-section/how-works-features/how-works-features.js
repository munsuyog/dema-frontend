'use client'
import React, { useState, useEffect } from 'react';
import './how-works-features.css';
import Image from 'next/image';

const HowWorksFeatures = () => {
  const [highlightedFeatureIndex, setHighlightedFeatureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedFeatureIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const progressTop = 100 * highlightedFeatureIndex; // Calculate top value here

  return (
    <div className='how-works-features'>
      <div className='feature-progress'>
        <div className='feature-progress-current' style={{ top: `${progressTop}px` }}></div>
      </div>
      <div className='how-works-features-container'>
        <div className={`how-works-feature ${highlightedFeatureIndex === 0 ? 'highlight' : ''}`}>
          <h2>Download the app</h2>
        </div>
        <div className={`how-works-feature ${highlightedFeatureIndex === 1 ? 'highlight' : ''}`}>
          <h2>Browse & add to cart</h2>
        </div>
        <div className={`how-works-feature ${highlightedFeatureIndex === 2 ? 'highlight' : ''}`}>
          <h2>Checkout & pay</h2>
          <Image src="/images/home/how-works-section/signup-squiggle.svg" width={67} height={54} className='signup-squiggle' />
        </div>
        <div className={`how-works-feature ${highlightedFeatureIndex === 3 ? 'highlight' : ''}`}>
          <h2>Save & get free ownership</h2>
        </div>
      </div>
    </div>
  );
};

export default HowWorksFeatures;
