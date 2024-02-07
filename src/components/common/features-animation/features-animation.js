import React from 'react';
import './features-animation.css';

const FeaturesAnimation = () => {

  return (
    <div className='free-ownership-features'>
      <div className='free-ownership-features-container'>
        <div className='free-ownership-feature highlight'>
          <div className='feature-progress'></div>
          <h2>Shop & Earn</h2>
        </div>
        <div className='free-ownership-feature'>
        <div className='feature-progress'></div>
          <h2>Refer & Earn</h2>
        </div>
        <div className='free-ownership-feature'>
        <div className='feature-progress'></div>
          <h2>Sell & Earn</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAnimation;
