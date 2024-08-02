import { ContentColorType, ContentDesktopPositionType, ContentMobilePositionType, SliderContentType } from '@/models/HeroSlider'
import React from 'react'
import clx from 'classnames'
import Link from 'next/link'

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

    const buynowClassname = clx(
        "rounded-btn",
        {
            "rounded-btn_white": color === ContentColorType.WHITE,
            "rounded-btn_black": color === ContentColorType.BLACK,
        }
    )

    const learnMoreClassname = clx(
        "underline-btn mt-[2.2222vw] md:mt-0",
        {
            "underline-btn_white": color === ContentColorType.WHITE,
            "underline-btn_black": color === ContentColorType.BLACK,
        }
    )
    return (
        <div className={containerClassname} >
            <h2 className='text-[8.3333vw]  md:text-[48px] font-bold text-current' >{title}</h2>
            <p className='mt-[4.44vw]  md:mt-6 text-[3.88vw] md:text-[18px] leading-[1.33] text-current' >{description}</p>
            {/* buttons */}
            <div className=' flex flex-col-reverse md:flex-row gap-[2.22222vw] md:gap-5 mt-[6.66vw] md:mt-[2.777vw] lg:mt-10 items-center justify-center md:justify-start' >
                {/* show more */}
                <Link
                    href={showMoreLink}
                    className={learnMoreClassname}
                >
                    {"Learn more"}
                </Link>
                {/* buy now */}
                <Link
                    href={buyNowLink}
                    className={buynowClassname}
                >
                    {"Buy now"}
                </Link>

            </div>
        </div>
    )
}

export default SlideContent