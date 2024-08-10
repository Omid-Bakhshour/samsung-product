import { IShowcaseType } from '@/models/ShowcaseSlider'
import React from 'react'
import TabItem from './TabItem'

type Props = {
    tabs: IShowcaseType[]
}

function Tab({
    tabs,
}: Props) {
    return (
        <div className='w-full block h-[13.33vw] md:h-[4vw] xl:h-14 pb-[3.61vw] md:pb-0 relative ' >
            <ul className='overflow-x-auto h-full flex flex-row items-center md:justify-center my-0 mx-auto' >
                {
                    tabs.map((item) => {
                        return (
                            <TabItem
                                key={item.id}
                                title={item.title}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Tab