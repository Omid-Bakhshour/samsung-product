"use client"

import React from 'react'
import TabItem from './TabItem'

type Props = {
    tabs: string[]
    activeTab: number
    setActiveTab: (i: number) => void
    activeColor: string
}

function Tab({
    activeColor,
    activeTab,
    setActiveTab,
    tabs
}: Props) {
    return (
        <ul className='py-[1.66vw] md:py-[0.41vw] xl:py-[6px] tab-container' >
            {
                tabs.map((tab, i) => {
                    return (
                        <TabItem
                            activeColor={activeColor}
                            isActive={i === activeTab}
                            onClick={() => setActiveTab(i)}
                            title={tab}
                            key={i}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Tab