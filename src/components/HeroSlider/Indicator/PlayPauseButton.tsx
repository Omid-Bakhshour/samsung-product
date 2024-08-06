"use client"

import { ContentColorType } from '@/models/HeroSlider'
import React, { Dispatch, SetStateAction } from 'react'
import { FaPause as PauseIcon, FaPlay as PlayIcon } from "react-icons/fa6";
import clx from "classnames"


type Props = {
    color: ContentColorType,
    isPlaying: boolean
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

function PlayPauseButton({
    color,
    isPlaying,
    setIsPlaying

}: Props) {
    const containerClassname = clx(
        "w-[4.44vw] h-[4.44vw] md:w-[1.11vw] md:h-[1.11vw] xl:w-4 xl:h-4 block",
        {
            "text-white": color === ContentColorType.WHITE,
            "text-black": color === ContentColorType.BLACK,
        }
    )

    return (
        <button 
            className={containerClassname}
            onClick={() => setIsPlaying(!isPlaying)}
        >
            {isPlaying ? <PauseIcon className='w-full h-full' /> : <PlayIcon className='w-full h-full' />}
        </button>
    )
}

export default PlayPauseButton