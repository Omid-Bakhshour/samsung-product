"use client"

import React from 'react'
import clx from 'classnames'

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
            "active": isActive
        }
    )
    return (
        <li className='tab-item' >
            <button
                className='text-black'
                onClick={onClick}
            >
                {title}
                <span className={lineClassname} />
            </button>
        </li>)
}

export default TabItem