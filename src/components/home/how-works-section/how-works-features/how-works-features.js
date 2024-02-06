import React from 'react'
import './how-works-features.css'
import Image from 'next/image'

const HowWorksFeatures = () => {
  return (
    <div className='how-works-features'>
      <div className='how-works-features-container'>
        <div className='how-works-feature'>
          <div className='feature-progress'></div>
          <h2>Download the app</h2>
        </div>
        <div className='how-works-feature highlight'>
        <div className='feature-progress'></div>
          <h2>Browse & add to cart</h2>
        </div>
        <div className='how-works-feature'>
        <div className='feature-progress'></div>
          <h2>Checkout & pay</h2>
          <Image src="/images/home/how-works-section/signup-squiggle.svg" width={67} height={54} className='signup-squiggle' />
        </div>
        <div className='how-works-feature'>
        <div className='feature-progress'></div>
          <h2>Save & get free ownership</h2>
        </div>
      </div>
    </div>
  )
}

export default HowWorksFeatures