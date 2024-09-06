'use client'

import { KeyFeature } from '@/models/KeyFeatureSlider'
import React, { useMemo, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide, } from 'swiper/react';
import Title from './Content/Title';
import KeyFeatureSlide from './Content/KeyFeatureSlide';
import Tab from './Tab';

type Props = {
    slider: KeyFeature
}

function KeyFeatureSlider({ slider }: Props) {
    const swiperRef = useRef<SwiperClass>();
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const title = slider.title
    const slides = slider.items

    const activeSlideItem = useMemo(() => {
        return slides?.[currentSlide] || slides?.[0]
    }, [slides, currentSlide])

    const activeColor = useMemo(() => {
        return activeSlideItem?.color || ""
    }, [activeSlideItem])

    const scrollToSlide = (i: number) => {
        if (swiperRef.current) {
            setCurrentSlide(i);
            swiperRef.current.slideToLoop(i)
        }
    };


    return (
        <section className='s-contaner' >
            {/* title & tab */}
            <div className='absolute left-0 right-0 top-0 z-[2]' >
                {/* title */}
                <Title
                    title={title}
                    color={activeColor}
                />
                {/* tab */}
                <Tab
                   tabs={slides.map((slide) => slide.tabLabel)}
                   activeTab={currentSlide}
                   setActiveTab={scrollToSlide}
                   activeColor={activeColor}
                />

            </div>
            {/* swiper slider */}
            <Swiper
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={() => {
                        setCurrentSlide(swiperRef?.current?.realIndex || 0);
                    }}
                >
                    {
                        slides.map((sliderItem) => {

                            return (
                                <SwiperSlide
                                    className='w-full h-full block'
                                    key={sliderItem.id}
                                >
                                    <KeyFeatureSlide
                                        sliderItem={sliderItem}
                                        activeColor={activeColor}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
        </section>
    )
}

export default KeyFeatureSlider