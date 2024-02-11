'use client'
import React from 'react'
import './coming-soon.css'
import Image from 'next/image'
import useIntersectionObserver from '@/animations/useIntersectionObserver'

const ComingSoon = () => {
    const svgRef = useIntersectionObserver((target) => {
        target.classList.remove('inactive');
        target.classList.add('active');
    }, { threshold: 0.5 }); // You can adjust the options as needed

    const customStyles = {
        "--L": "35.2",
        "--delay": "1s",
        "--time": "700ms"
      };
      const customStylesN = {
        "--L": "333.3", "--time": "2s"
      }
  return (
    <section id='coming-soon'>
        <div>
        <div className='shop-anywhere section-padding'>
            <div className='coming-soon-title-wrapper'>
            <div className='coming-soon-title'>
                <span className='gradient-text'>Coming Soon</span>
            </div>
            </div>
            <div className='shop-anywhere-flex'>
                <div className='shop-anywhere-container'>
                    <div className='shop-anywhere-wrapper'>
                        <div className='shop-anywhere-box'>
                            <span>Shop Anywhere</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="187" height="97" viewBox="0 0 187 97" fill="none" class="inactive shop-anywhere-squiggle" ref={svgRef}>
                    <path d="M4 30.8606C37.8142 110.659 127 37.7597 80 30.8606C33 23.9615 63 103.861 182 62.8605" stroke="url(#paint0_linear_1_6137)" stroke-width="8" stroke-linecap="round" class="tracePath" time="2s" style={customStylesN}></path>
                    <path d="M169.433 55.4229C169.433 55.4229 181.518 59.0801
                    182.5 63.5C183.5 68 174.628 76.5121 174.628 76.5121" stroke="#3830C9" stroke-width="8" stroke-linecap="round" class="tracePath delayed" delay="1s" time="700ms" style={customStyles}></path>
                   <defs>
                        <lineargradient id="paint0_linear_1_6137" x1="191" y1="42.3605" x2="-10.5" y2="42.4637" gradientUnits="userSpaceOnUse">
                            <stop offset="0.415" stop-color="#3830C9"></stop>
                            <stop offset="0.815" stop-color="#22E393"></stop>
                        </lineargradient>
                    </defs>
                </svg>
                </div>
                <div className='shop-anywhere-logos'>
                    <Image src="/images/home/coming-soon/amazon-logo.svg" width={140} height={42} />
                    <Image src="/images/home/coming-soon/walmart-logo.svg" width={140} height={42} />
                    <Image src="/images/home/coming-soon/ebay-logo.svg" width={140} height={42} />
                    <Image src="/images/home/coming-soon/temu-logo.svg" width={60} height={60} />
                    <Image src="/images/home/coming-soon/etsy-logo.svg" width={140} height={42} />

                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ComingSoon