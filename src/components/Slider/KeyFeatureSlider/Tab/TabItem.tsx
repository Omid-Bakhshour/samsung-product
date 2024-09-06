"use client"

import React from 'react'
import clx from 'classnames'
import { ContentColorType } from '@/models/HeroSlider'

type Props = {
    title: string
    isActive: boolean
    onClick: () => void
    activeColor: string
}

function TabItem({
    activeColor,
    isActive,
    onClick,
    title

}: Props) {
    const lineClassname = clx(
        "",
        {
            "active": isActive,
            "!bg-white": activeColor === ContentColorType.WHITE,
            "!bg-black": activeColor === ContentColorType.BLACK,
        }
    )

    const textClassname = clx(
        "tab-item multi",
        {
            "text-white hover:drop-shadow-tab-white hover:after:bg-[rgba(0,0,0,0.25)]": activeColor === ContentColorType.WHITE,
            "text-black hover:drop-shadow-tab-black hover:after:bg-[rgba(255,255,255,0.25)]": activeColor === ContentColorType.BLACK,
            "hover:text-[#ddd]": activeColor === ContentColorType.WHITE && !isActive,
            "hover:text-[#555]": activeColor === ContentColorType.BLACK && !isActive,
        }
    )
    return (
        <li className={textClassname} >
            <button
                onClick={onClick}
            >
                {title}
                <span className={lineClassname} />
            </button>
        </li>)
}

export default TabItem