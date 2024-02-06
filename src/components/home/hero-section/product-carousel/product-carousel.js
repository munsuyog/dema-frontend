import React from 'react'
import './product-carousel.css'
import Image from 'next/image'

const ProductCarousel = () => {
  return (
    <div id='product-carousel'>
        <div className='product-bought-info'>
            <div className='product-bought-info_header'>
                <div className='header-icon'>
                    <Image src="/images/home/hero-section/favicon.svg" width={24} height={24} />
                </div>
                <Image src="/images/home/hero-section/dema-logomark.svg" width={64} height={18} />
            </div>
            <div className='product-bought-info-container'>
                <p className='product-bought-info-text'>
                    <span>Someone from </span>
                    <span className='product-bought-info-text_location'><Image src="/images/home/hero-section/location.svg" width={18} height={18} />Philadelphia, PA </span>
                    <span>bought a </span>
                    <span className='product-bought-info-text_name'>Starbucks shampoo</span>
                </p>
            </div>
        </div>
        <div className='product-carousel-container'>
            <Image src="/images/home/hero-section/green-shoe.png" width={590} height={290} className='product-image' />
        </div>
        <div className='product-carousel-points-info'>
            <div className='header-icon'>
                <Image src="/images/home/hero-section/favicon.svg" width={24} height={24} />
            </div>
            <div className='product-carousel-points-container'>
                <div className='points'>100 Points</div>
                <div className='saved-points-wrapper'>
                    <span className='text-saved'>Saved </span>
                    <span>32% ($6.70)</span>
                </div>
            </div>
        </div>
        <div className='product-carousel-progress'>
            <div className='carousel-progress-number active'>
                01
            </div>
            <div className='carousel-progress'>
                <div className='carousel-current-progress'></div>
            </div>
            <div className='carousel-progress-number active'>
                02
            </div>
        </div>
    </div>
  )
}

export default ProductCarousel