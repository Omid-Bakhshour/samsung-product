"use client"

import React, { Fragment, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide, } from 'swiper/react';
import HeroSlide from './HeroSlide';
import Indicator from './Indicator';
import SliderButtons from './SliderButtons';
import { EffectFade } from 'swiper/modules';
import { IHeroSlider } from '@/models/HeroSlider';

type Props = {
  slides: IHeroSlider[]
}

function HeroSlider({
  slides
}: Props) {
  const swiperRef = useRef<SwiperClass>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const isSlidesValid = slides && Array.isArray(slides) && slides.length > 0
  if(!isSlidesValid) {
    return <></>
  }

  const scrollToSlide = (i: number) => {
    if (swiperRef.current) {
      setCurrentSlide(i);
      swiperRef.current.slideToLoop(i)
    }
  };

  const next = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const previous = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <section className='w-full max-w-8xl mx-auto h-full relative' >
      {/* swiper slider */}
      <Swiper
        loop
        slidesPerView={1}
        effect='fade'
        modules={[EffectFade]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          setCurrentSlide(swiperRef?.current?.realIndex || 0);
        }}
      >
        {
          slides.map((slide, index) => {
            const isSlideValid = slide && slide.id && slide.id > 0
            if (!isSlideValid) {
              return <Fragment key={index} ></Fragment>
            }
            const isSlideActive = index === currentSlide

            return (
              <SwiperSlide
                className='w-full h-full block'
                key={slide.id}
              >
                <HeroSlide
                  slide={slide}
                  isPlaying={isPlaying}
                  activeIndex={currentSlide}
                  isActive={isSlideActive}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      {/* buttons */}
      <SliderButtons
        next={next}
        previous={previous}
      />
      {/* indicator */}
      <Indicator
        slides={slides}
        activeIndex={currentSlide}
        scrollToSlide={scrollToSlide}
        next={next}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </section>
  )
}

export default HeroSlider