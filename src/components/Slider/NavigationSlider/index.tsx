"use client"

import { menuLink } from '@/constants/smartphones/Zfold6';
import React, { Fragment } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import NavigationSlide from './NavigationSlide';

function NavigationSlider() {
  return (
    <Swiper
       className='h-full'
       slidesPerView={"auto"}
    >
           {
          menuLink.map((slide, index) => {
            const isSlideValid = slide && slide.id && slide.id > 0
            if (!isSlideValid) {
              return <Fragment key={index} ></Fragment>
            }

            return (
              <SwiperSlide
                className='py-0.55vw md:py-[2px] px-0 !w-auto'
                key={slide.id}
              >
                <NavigationSlide 
                    slideItem={slide}
                    active={index === 0}
                />
              </SwiperSlide>
            )
          })
        }
    </Swiper>
  )
}

export default NavigationSlider