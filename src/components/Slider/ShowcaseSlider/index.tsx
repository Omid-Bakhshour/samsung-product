"use client"

import { IShowcaseType } from '@/models/ShowcaseSlider'
import React, { useRef, useState } from 'react'
import Tab from './Tab'
import { Swiper, SwiperClass, SwiperSlide, } from 'swiper/react';
import ShowcaseSlide from './slide/ShowcaseSlide';

type Props = {
    slides: IShowcaseType[]
}

function ShowcaseSlider({
    slides,
}: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const swiperRef = useRef<SwiperClass>();

    const scrollToSlide = (i: number) => {
        if (swiperRef.current) {
            setActiveIndex(i);
            swiperRef.current.slideToLoop(i)
        }
    };

    return (
        <section className='s-contaner flex flex-col' >
            {/* tab */}
            <Tab
                tabs={slides}
                activeIndex={activeIndex}
                scrollToSlide={scrollToSlide}
            />
            {/* slider */}
            <div className='block h-[164.44vw] md:h-[49.16vw] xl:h-[708px] pb-[4.44vw] md:p-0 w-[91.11vw] md:w-full md:max-w-[98.33vw] xl:max-w-[1416px] mx-auto ' >
                <Swiper
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={() => {
                        setActiveIndex(swiperRef?.current?.realIndex || 0);
                    }}
                >
                    {
                        slides.map((sliderItem) => {

                            return (
                                <SwiperSlide
                                    className='w-full h-full block'
                                    key={sliderItem.id}
                                >
                                    <ShowcaseSlide
                                        items={sliderItem.items}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default ShowcaseSlider