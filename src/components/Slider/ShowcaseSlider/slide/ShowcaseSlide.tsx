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
        <div className='flex flex-wrap justify-center relative'>
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