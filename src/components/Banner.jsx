import React from 'react'
import bannerImg from '../../public/banner.jpg'

export default function Banner() {
  return (

    <div className="hero bg-banner ">
      <img className='rounded-lg w-full h-[500px]' src={bannerImg} alt="" />
    </div>

  )
}
