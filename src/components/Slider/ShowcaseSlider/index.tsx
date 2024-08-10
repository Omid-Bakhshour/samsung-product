"use client"

import { IShowcaseType } from '@/models/ShowcaseSlider'
import React, { useState } from 'react'
import Tab from './Tab'

type Props = {
    slides: IShowcaseType[]
}

function ShowcaseSlider({
    slides,
}: Props) {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    return (
        <section className='s-contaner flex flex-col' >
            {/* tab */}
            <Tab
                tabs={slides}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
            {/* slider */}
        </section>
    )
}

export default ShowcaseSlider