import { ContentColorType, ContentDesktopPositionType, ContentMobilePositionType, SliderContentType } from '@/models/HeroSlider'
import React from 'react'
import clx from 'classnames'
import Link from 'next/link'

type Props = {
    content: SliderContentType
    color: ContentColorType
    classname?: string
}

function SlideContent({ content, color, classname }: Props) {
    if (!content) {
        return <></>
    }
    const title = content.title
    const description = content.description
    const showMoreLink = content.showmoreLink
    const buyNowLink = content.buyNowLink

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
        <div className={classname} >
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