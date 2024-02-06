import React from 'react'
import './download-button.css'
import Image from 'next/image'

const DownloadButton = () => {
  return (
    <div id='download-btn'>
        <div className='download-btn-front-border'>
            <div className='download-btn-front'>
                <div className='download-btn-front-qr'>
                    <Image src="/images/common/navbar/qr.svg" width={48} height={48} className='qr-image' />
                </div>
                <div className='download-btn-title-wrapper'>
                    <Image src="/images/common/navbar/squiggle.svg" width={55} height={18} className='squiggle-arrow' />
                    <Image src="/images/common/navbar/triangle.svg" width={18} height={18} className='triangle-image' />
                    <div className='download-btn-title-container'>
                        <Image src="/images/common/navbar/arrow-text.svg" width={30} height={24} className='arrow-text-image' />
                        <div className='download-btn-title'>Download</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='download-btn-back-border'>
            <div className='download-btn-back'>
                
            </div>
        </div>
    </div>
  )
}

export default DownloadButton