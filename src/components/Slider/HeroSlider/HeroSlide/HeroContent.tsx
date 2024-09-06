import { ContentColorType, ContentDesktopPositionType, ContentMobilePositionType, SliderContentType } from '@/models/HeroSlider'
import React from 'react'
import clx from 'classnames'
import Link from 'next/link'
import SlideContent from '../../Common/SlideContent'

type Props = {
    content: SliderContentType
    color: ContentColorType
}

function HeroContent({ content, color }: Props) {
    if (!content) {
        return <></>
    }

    const position = content.postion
    const mobilePosition = position?.mobile || ContentMobilePositionType.TOPCENTER
    const desktopPosition = position?.desktop || ContentDesktopPositionType.LEFTCENTER
    const containerClassname = clx(
        "absolute w-[86.66vw] md:w-[43vw] xl:w-[620px] flex flex-col z-[10]",
        {
            "left-1/2 -translate-x-1/2 bottom-[11.11vw] text-center": mobilePosition == ContentMobilePositionType.BOOTTOMCENTER,
            "left-1/2 right-auto -translate-x-1/2 top-[11.11vw] text-center": mobilePosition == ContentMobilePositionType.TOPCENTER,
            "md:left-20 md:translate-x-0 md:-translate-y-1/2 md:top-1/2 md:text-left": desktopPosition == ContentDesktopPositionType.LEFTCENTER,
            "md:right-20 md:left-auto md:translate-x-0 md:-translate-y-1/2 md:top-1/2 md:text-left": desktopPosition == ContentDesktopPositionType.RIGHTCENTER,
            "text-white": color === ContentColorType.WHITE,
            "text-black": color === ContentColorType.BLACK,
        }
    )

    return (
        <SlideContent
            color={color}
            content={content}
            classname={containerClassname}
        />
    )
}

export default HeroContent