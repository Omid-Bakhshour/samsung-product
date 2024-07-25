import { ContentColorType, ContentDesktopPositionType, ContentMobilePositionType, SliderContentType } from '@/models/HeroSlider'
import React from 'react'
import clx from 'classnames'


type Props = {
    content: SliderContentType
    color: ContentColorType

}

function SlideContent({ content, color }: Props) {
    if (!content) {
        return <></>
    }
    const title = content.title
    const description = content.description
    const showMoreLink = content.showmoreLink
    const buyNowLink = content.buyNowLink
    const position = content.postion
    const mobilePosition = position.mobile || ContentMobilePositionType.TOPCENTER
    const desktopPosition = position.desktop || ContentDesktopPositionType.LEFTCENTER



    const containerClassname = clx(
        "absolute w-full md:w-[43vw] xl:w-[620px] flex flex-col z-[10]",
        {
            "left-1/2 -translate-x-1/2 bottom-[11.11vw]" : mobilePosition == ContentMobilePositionType.BOOTTOMCENTER,
            "left-1/2 -translate-x-1/2 top-[11.11vw]" : mobilePosition == ContentMobilePositionType.TOPCENTER,
            "md:left-20 md:translate-x-0 md:-translate-y-1/2 md:top-1/2" : desktopPosition == ContentDesktopPositionType.LEFTCENTER,
            "md:right-20 md:left-auto md:translate-x-0 md:-translate-y-1/2 md:top-1/2" : desktopPosition == ContentDesktopPositionType.RIGHTCENTER,
            "text-white": color === ContentColorType.WHITE,
            "text-black": color === ContentColorType.BLACK,
        }
    )

    return (
        <div className={containerClassname} >
            <h2 className='text-[48px] font-bold text-current' >{title}</h2>
            <p className='mt-6 text-[18px] leading-[1.33vw] text-current' >{description}</p>

        </div>
    )
}

export default SlideContent