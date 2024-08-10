"useclient"

import { IShowcaseType } from '@/models/ShowcaseSlider'
import React, { Dispatch, SetStateAction } from 'react'
import TabItem from './TabItem'

type Props = {
    tabs: IShowcaseType[]
    activeIndex: number
    setActiveIndex: Dispatch<SetStateAction<number>>
}

function Tab({
    tabs,
    activeIndex,
    setActiveIndex
}: Props) {
    return (
        <div className='w-full block h-[13.33vw] md:h-[4vw] xl:h-14 pb-[3.61vw] md:pb-0 relative ' >
            <ul className='no-scrollbar h-full flex flex-row items-center md:justify-center my-0 mx-auto' >
                {
                    tabs.map((item, i) => {
                        return (
                            <TabItem
                                key={item.id}
                                title={item.title}
                                isActive={ i === activeIndex}
                                onClick={() => setActiveIndex(i)}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Tab