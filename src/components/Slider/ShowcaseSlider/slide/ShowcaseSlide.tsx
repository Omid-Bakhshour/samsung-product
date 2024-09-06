import { IShowcaseItem } from '@/models/ShowcaseSlider'
import React from 'react'
import FullSlideItem from './FullSlideItem'
import HalfSlideItem from './HalfSlideItem'

type Props = {
    items: IShowcaseItem[]
}

function ShowcaseSlide({
    items
}: Props) {
    return (
        <div className='flex flex-wrap justify-center felx-row md:flex-col relative h-[164.44vw] md:h-[49.16vw] xl:h-[708px] pb-[4.44vw] md:p-0'>
            {
                items.map((item, i) => {
                    if (i == 0) {
                        return (
                            <FullSlideItem
                                item={item}
                                key={i}
                            />
                        )
                    }

                    return (
                        <HalfSlideItem
                            item={item}
                            key={i}
                        />
                    )
                })
            }

        </div>
    )
}

export default ShowcaseSlide