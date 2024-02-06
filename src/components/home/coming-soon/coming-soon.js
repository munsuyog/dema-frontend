import React from 'react'
import './coming-soon.css'
import Image from 'next/image'

const ComingSoon = () => {
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
                    <Image src="/images/home/coming-soon/shop-anywhere-squiggle.svg" width={178} height={96} className='shop-anywhere-squiggle' />
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